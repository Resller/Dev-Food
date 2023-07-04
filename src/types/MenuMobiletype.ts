export type InitialStateMenuMobileType ={
    menu:boolean
}
export type ChangeMenuAction = {
    type: 'CHANGE_MENU_MOBILE';
    payload: {
        menu:boolean
    };
}
