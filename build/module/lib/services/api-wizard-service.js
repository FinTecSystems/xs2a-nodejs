import { axios } from '../axios-instance';
export class APIWizardService {
    constructor() { }
    navigate(request) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/wizard', request)
                .then(response => {
                resolve(response.data);
            })
                .catch(error => {
                reject(error.response.data);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXdpemFyZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9hcGktd2l6YXJkLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDNUIsZ0JBQWUsQ0FBQztJQUVULFFBQVEsQ0FBQyxPQUF5QjtRQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLEtBQUs7aUJBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QifQ==