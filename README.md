# XS2A Node.js

The official Node.js API wrapper for the FinTecSystems XS2A API. Written in Typescript with intellisense support and autocompletion.

[Documentation (Typedocs)](https://docs.fintecsystems.com/xs2a-nodejs)

### Get Started

```bash
npm i @fintecsystems/xs2a-node --save
```

```js
import { XS2A } from '@fintecsystems/xs2a-node';
// or const { XS2A } = require('xs2a-node');

const xs2a = new XS2A('your-api-key');
```

### Available Methods

```js
const {
	Risk,
	Pay,
	API,
	Wizard,
	Sessions,
	Events,
	Blacklist,
	Whitelist
} = xs2a;

Risk.create();
Risk.get();
Risk.list();
Risk.delete();
Risk.getAccountSnapshot();
Risk.getFullPDF();
Risk.getReport();
Risk.getEvents();
Risk.completeManually();

Pay.create();
Pay.get();
Pay.list();
Pay.delete();
Pay.updatePaymentStatus();
Pay.getEvents();
Pay.getReport();
Pay.generatePainFile();
Pay.getPainFile();
Pay.getRefundPayout();
Pay.listRefundPayouts();

API.BankAccounts.list();
API.BankAccounts.listForBankConnection();
API.BankAccounts.get();
API.BankAccounts.delete();
API.BankAccounts.getBalance();
API.BankAccounts.getReport();
API.BankAccounts.getTurnovers();
API.BankAccounts.markTurnoversAsSeen();

API.BankConnections.create();
API.BankConnections.get();
API.BankConnections.list();
API.BankConnections.reset();
API.BankConnections.sync();
API.BankConnections.delete();

API.BankUsers.create();
API.BankUsers.get();
API.BankUsers.list();
API.BankUsers.delete();
API.BankUsers.createAccessToken();
API.BankUsers.getAccessToken();
API.BankUsers.listAccessTokens();
API.BankUsers.refreshAccessToken();
API.BankUsers.deleteAccessToken();

/* Navigating the Wizard within a API.BankUser's Scope */
API.Wizard.navigate();

/* Navigating the Wizard for Risk or Pay */
Wizard.navigate();

Sessions.get();

Events.getAll();
Events.get();

Blacklist.add();
Blacklist.get();
Blacklist.delete();

Whitelist.add();
Whitelist.get();
Whitelist.delete();
```