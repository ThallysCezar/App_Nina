export class User {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public role?: string,
        public perfil?: string,
        public login?: string,
        public password?: string,
        public status?: string,
        public createdAt?: string,
        public updatedAt?: string,
        public deliveryMade?: number,
        public deliveriesInProgress?: number
) {}
}
