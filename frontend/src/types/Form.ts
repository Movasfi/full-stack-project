export interface IFormSingUp extends IFormLogin {
    name: string
}

export interface IFormLogin {
    email: string,
    password: string,
}