import dotenv from 'dotenv'
dotenv.config();

import test from 'ava';
import { Country, Currency, Language, SyncMode } from './models';
import { XS2A } from './xs2a';

const apikey = process.env.APIKEY || '';

test('should exist', async t => {
	const client = new XS2A('abc123');
	t.not(client, undefined);
});

test('Blacklist', async (t) => {
	const xs2a = new XS2A(apikey)
	const { Blacklist } = xs2a;

	/**
	 * Add an Entry
	 */
	const addedEntry = await Blacklist.add({
		data: 'DE62888888880012345678'
	});

	t.is(addedEntry.data, 'DE62888888880012345678');

	/**
	 * Get an entry
	 */
	const entry = await Blacklist.get(addedEntry.id);

	t.is(entry.data, 'DE62888888880012345678');

	/**
	 * Delete an entry
	 */
	await t.notThrowsAsync(async () => {
		await Blacklist.delete(entry.id);
	});
});

test('Whitelist', async (t) => {
	const xs2a = new XS2A(apikey)
	const { Whitelist } = xs2a;

	/**
	 * Add an Entry
	 */
	const addedEntry = await Whitelist.add({
		iban: 'DE62888888880012345678'
	});

	t.not(addedEntry.hash, undefined);

	/**
	 * Get an entry
	 */
	const entry = await Whitelist.get(addedEntry.id);

	t.is(entry.hash, addedEntry.hash);

	/**
	 * Delete an entry
	 */
	await t.notThrowsAsync(async () => {
		await Whitelist.delete(entry.id);
	});
});

test('Events', async (t) => {
	const xs2a = new XS2A(apikey)
	const { Events } = xs2a;

	const events = await Events.getAll();
	t.not(events.data[0].id, undefined);
	t.is(events.data[0].object, 'xs2a_event');

	const event = await Events.get(events.data[0].id);
	t.is(event.id, events.data[0].id);
})

test('Risk', async (t) => {
	const xs2a = new XS2A(apikey)

	const { Risk } = xs2a;
	const session = await Risk.create();
	t.not(session.wizard_session_key, undefined);
	t.not(session.transaction, undefined);
})

test('Pay', async (t) => {
	const xs2a = new XS2A(apikey)

	const { Pay } = xs2a;
	const session = await Pay.create({
		language: Language.DE,
		amount: 1,
		currency_id: Currency.EUR,
		purpose: 'flowers',
		recipient_holder: 'abc',
		recipient_iban: 'DE62888888880012345678'
	})

	t.not(session.wizard_session_key, undefined);
	t.not(session.transaction, undefined);
})

test('API', async (t) => {
	const xs2a = new XS2A(apikey)
	const { API } = xs2a;

	/**
	 * Create Bank User
	 */
	const user = await API.BankUsers.create({
		name: 'Mustermann',
		email: 'user@example.com'
	});
	t.not(user.id, undefined);
	t.is(user.name, 'Mustermann');
	t.is(user.email, 'user@example.com');
	t.is(user.testmode, true);
	t.not(user.created_at, undefined);
	t.is(user.object, 'bank_user');

	/**
	 * List all Bank Users
	 */
	const allUsers = await API.BankUsers.list(1, 1);
	const createdUser = allUsers.data[0];
	t.not(createdUser.id, undefined);
	t.is(createdUser.name, 'Mustermann');
	t.is(createdUser.email, 'user@example.com');
	t.is(createdUser.testmode, true);
	t.not(createdUser.created_at, undefined);
	t.is(createdUser.object, 'bank_user');

	/**
	 * Get specific Bank User
	 */
	const createdUser2 = await API.BankUsers.get(createdUser.id);
	t.not(createdUser2.id, undefined);
	t.is(createdUser2.name, 'Mustermann');
	t.is(createdUser2.email, 'user@example.com');
	t.is(createdUser2.testmode, true);
	t.not(createdUser2.created_at, undefined);
	t.is(createdUser2.object, 'bank_user');

	/**
	 * Create Access Token for Bank User
	 */
	const accesstoken = await API.BankUsers.createAccessToken(createdUser.id, '2050-01-01 11:11:11');
	t.not(accesstoken.id, undefined);
	t.not(accesstoken.token, undefined);
	t.is(accesstoken.valid_until, '2050-01-01 11:11:11');
	t.not(accesstoken.created_at, undefined);
	t.is(accesstoken.object, 'bank_user_access_token');

	/**
	 * List all Access Tokens
	 */
	const accesstokenList = await API.BankUsers.listAccessTokens(createdUser.id);
	const createdAccessToken = accesstokenList.data[0];
	t.not(createdAccessToken.id, undefined);
	t.not(createdAccessToken.token, undefined);
	t.is(createdAccessToken.valid_until, '2050-01-01 11:11:11');
	t.not(createdAccessToken.created_at, undefined);
	t.is(createdAccessToken.object, 'bank_user_access_token');

	/**
	 * Get specific Access Token
	 */
	const createdAccessToken2 = await API.BankUsers.getAccessToken(createdUser.id, createdAccessToken.id);
	t.not(createdAccessToken2.id, undefined);
	t.not(createdAccessToken2.token, undefined);
	t.is(createdAccessToken2.valid_until, '2050-01-01 11:11:11');
	t.not(createdAccessToken2.created_at, undefined);
	t.is(createdAccessToken2.object, 'bank_user_access_token');

	/**
	 * Refresh Access Token
	 */
	const refreshedAccessToken = await API.BankUsers.refreshAccessToken(createdUser.id, createdAccessToken.id, '2050-02-02 22:22:22');
	t.not(refreshedAccessToken.id, undefined);
	t.not(refreshedAccessToken.token, undefined);
	t.is(refreshedAccessToken.valid_until, '2050-02-02 22:22:22');
	t.not(refreshedAccessToken.created_at, undefined);
	t.is(refreshedAccessToken.object, 'bank_user_access_token');


	/**
	 * Cerate a Bank Connection
	 */
	let bankUsersXs2aInstance = new XS2A(refreshedAccessToken.token);

	const bankConnectionSessionResponse = await bankUsersXs2aInstance.API.BankConnections.create({
		sync_mode: SyncMode.FULL
	});
	t.not(bankConnectionSessionResponse.wizard_session_key, undefined);
	t.not(bankConnectionSessionResponse.transaction, undefined);

	/**
	 * Check for Session
	 */
	const _xs2a = new XS2A(apikey)
	const { Sessions } = _xs2a;
	const session = await Sessions.get(bankConnectionSessionResponse.transaction);

	t.is(session.wizard_session_key, bankConnectionSessionResponse.wizard_session_key);

	/**
	 * Connect Bank Account
	 */
	bankUsersXs2aInstance = new XS2A(refreshedAccessToken.token);

	const wizRes1 = await bankUsersXs2aInstance.API.Wizard.navigate({
		key: bankConnectionSessionResponse.wizard_session_key,
	});

	t.not(wizRes1.form?.elements, undefined);
	t.true(wizRes1.form?.elements?.some((el) => el.name === 'country_id'));
	t.true(wizRes1.form?.elements?.some((el) => el.name === 'bank_code'));

	const wizRes2 = await bankUsersXs2aInstance.API.Wizard.navigate({
		key: bankConnectionSessionResponse.wizard_session_key,
		country_id: Country.DE,
		bank_code: '88888888',
	});

	t.not(wizRes2.form?.elements, undefined);
	t.true(wizRes2.form?.elements?.some((el) => el.name === 'USER_NAME'));
	t.true(wizRes2.form?.elements?.some((el) => el.name === 'USER_PIN'));
	t.true(wizRes2.form?.elements?.some((el) => el.name === 'privacy_policy'));

	const wizRes3 = await bankUsersXs2aInstance.API.Wizard.navigate({
		key: bankConnectionSessionResponse.wizard_session_key,
		USER_NAME: 'abcdef',
		USER_PIN: '123456',
		privacy_policy: true
	});

	t.is(wizRes3.form?.name, 'finish');

	/**
	 * Get Bank Connections
	 */
	const bankConnections = await bankUsersXs2aInstance.API.BankConnections.list(1, 1);
	t.not(bankConnections.data[0].id, undefined);
	t.is(bankConnections.data[0].country_id, 'DE');
	t.is(bankConnections.data[0].transaction, bankConnectionSessionResponse.transaction);

	const bankConnection = await bankUsersXs2aInstance.API.BankConnections.get(bankConnections.data[0].id);
	t.not(bankConnection.id, undefined);
	t.is(bankConnection.country_id, 'DE');
	t.is(bankConnection.transaction, bankConnectionSessionResponse.transaction);

	/**
	 * Sync Bank Connection
	 */
	await t.notThrowsAsync(async () => {
		await bankUsersXs2aInstance.API.BankConnections.sync(bankConnection.id);
	});

	/**
	 * Reset Bank Connection
	 */
	const resetResponse = await bankUsersXs2aInstance.API.BankConnections.reset(bankConnection.id);
	t.not(resetResponse.wizard_session_key, undefined);
	t.not(resetResponse.transaction, undefined);

	/**
	 * Bank Accounts
	 */
	const bankAccounts = await bankUsersXs2aInstance.API.BankAccounts.list(1, 1);
	t.not(bankAccounts.data[0].id, undefined);
	t.is(bankAccounts.data[0].country_id, 'DE');
	t.is(bankAccounts.data[0].bank_code, '88888888');
	t.is(bankAccounts.data[0].bank_connection_id, bankConnection.id);

	const bankAccountsForBc = await bankUsersXs2aInstance.API.BankAccounts.listForBankConnection(bankConnection.id);
	t.is(bankAccountsForBc.data[0].id, bankAccounts.data[0].id);
	t.is(bankAccountsForBc.data[0].country_id, 'DE');
	t.is(bankAccountsForBc.data[0].bank_code, '88888888');
	t.is(bankAccountsForBc.data[0].bank_connection_id, bankConnection.id);

	const bankAccount = await bankUsersXs2aInstance.API.BankAccounts.get(bankAccounts.data[0].id);
	t.is(bankAccount.id, bankAccounts.data[0].id);
	t.is(bankAccount.country_id, 'DE');
	t.is(bankAccount.bank_code, '88888888');
	t.is(bankAccount.bank_connection_id, bankConnection.id);

	/**
	 * Check Balance and Turnovers
	 */
	const balance = await bankUsersXs2aInstance.API.BankAccounts.getBalance(bankAccount.id);
	t.not(balance.available, undefined);
	t.not(balance.balance, undefined);

	const turnovers = await bankUsersXs2aInstance.API.BankAccounts.getTurnovers(bankAccount.id);
	t.not(turnovers.turnovers[0].amount, undefined);

	await t.notThrowsAsync(async () => {
		await bankUsersXs2aInstance.API.BankAccounts.markTurnoversAsSeen(bankAccount.id);
	});


	/**
	 * Delete Bank Conection
	 */
	await t.notThrowsAsync(async () => {
		await bankUsersXs2aInstance.API.BankConnections.delete(bankConnection.id);
	});

	/**
	 * Delete Bank Account
	 */
	await t.notThrowsAsync(async () => {
		await bankUsersXs2aInstance.API.BankAccounts.delete(bankAccount.id);
	});

	/**
	 * Delete Access Token
	 */
	const xs2a2 = new XS2A(apikey)

	await xs2a2.API.BankUsers.deleteAccessToken(createdUser.id, refreshedAccessToken.id);

	/**
	 * Delete Bank User
	 */
	await t.notThrowsAsync(async () => {
		await xs2a2.API.BankUsers.delete(createdUser.id);
	});

	try {
		await API.BankUsers.get(createdUser.id);
	} catch (e) {
		t.is(e.code, 404);
	}
})



