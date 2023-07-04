export type InitialStateIsLoggedType = {
    logged : boolean
}
export type ChangeLoggedAction = {
    type: 'CHANGE_LOGGED';
    payload: {
        logged:boolean
    };
}
