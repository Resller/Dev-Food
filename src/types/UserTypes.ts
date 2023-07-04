export type InitialStateUserType = {
    name:string,
    email:string,
    password:string,
    confirmPassword:string,
    id:number
}

export type ChangeNameAction = {
    type: 'SEND_NAME';
    payload: {
        name:string
    };
}
export type ChangeEmailAction = {
    type: 'SEND_EMAIL';
    payload: {
       email:string
    };
}
export type ChangePasswordAction = {
    type: 'SEND_PASSWORD';
    payload: {
        password:string
    };
}
export type ChangeConfirmPasswordAction = {
    type: 'SEND_CONFIRMPASSWORD';
    payload: {
        confirmPassword:string
    };
}
export type ChangeUserAction = {
    type: 'CHANGE_USER';
    payload: {
        name:string,
        email: string,
        id:number
    };
}

export type TypeUserAction =  ChangeNameAction | ChangeEmailAction | ChangePasswordAction | ChangeConfirmPasswordAction | ChangeUserAction ;