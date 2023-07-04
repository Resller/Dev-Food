export type InitialStateSearchType = {
    product:string
}

export type ChangeSearchAction = {
    type: 'CHANGE_SEARCH';
    payload: {
        product:string
    };
}