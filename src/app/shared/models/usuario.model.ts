export class Usuario {
    constructor(
        public id?: number,
        public name?: string,
        public login?: string, //login com E-mail
        public password?: string,
        public perfil?: string
) {}
}
