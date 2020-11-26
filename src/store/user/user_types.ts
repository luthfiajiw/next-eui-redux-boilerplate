export enum UserActionTypes {
    GET_USERS = 'GET_USERS'
}

export interface UserState {
    detail: User,
    pageIndex: number,
    pageSize: number,
    results: Array<User>,
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany
}

export interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export interface UserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}