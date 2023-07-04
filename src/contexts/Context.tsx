import { createContext, useReducer } from "react";
import { useContext, ReactNode } from "react";

import {
  addressReducer,
  initialAddressState
} from "../reducer/address";

import {
    InitialStateAddressType,
    TypeAddressAction
}from "../types/address";
import {
  userReducer,
  initialStateUser
} from "../reducer/userReducer";
import {
    TypeUserAction,
    InitialStateUserType
}from "../types/UserTypes";
import {
  menuMobileReducer,
  menuMobileInitialState,
} from "../reducer/menuMobile";
import {
    ChangeMenuAction,
    InitialStateMenuMobileType,
}from "../types/MenuMobiletype";
import {
  searchReducer,
  searchInitialState,

} from "../reducer/searchReducer";
import {
    ChangeSearchAction,
    InitialStateSearchType,
}from "../types/Searchtype";
import {
    CartReducer,
    cartInitialState,
 
} from "../reducer/cartReducer";
import {
    typeCartAction,
    InitialStateCartType,
}from "../types/Cartypes";
import {
    PaymentReducer,
    paymentInitialState,
} from "../reducer/payment";
import {
    typesPaymentAction,
    InitialStatePaymentType,
}from "../types/PaymentTypes";
import {
  orderReducer,
  orderInitialState,

} from "../reducer/order";
import {
    TypeOrderAction,
    InitialStateOrderType,
}from "../types/OrderTypes";
import {
  listAddressReducer,
  initialStateListAddress,
} from "../reducer/listAddress";
import {
    TypeListAddresstAction,
    TypeInitialStateListAddress,
}from "../types/ListAddressTypes";
import {
  isLoggedReducer,
  isLoggedInitialState
} from "../reducer/isLogged";
import {
    ChangeLoggedAction,
    InitialStateIsLoggedType,
}from "../types/Logged";

type InitialStateType = {
  address: InitialStateAddressType;
  user: InitialStateUserType;
  menuMobile: InitialStateMenuMobileType;
  search: InitialStateSearchType;
  cart: InitialStateCartType;
  payment: InitialStatePaymentType;
  order: InitialStateOrderType;
  listAddress: TypeInitialStateListAddress;
  logged: InitialStateIsLoggedType;
};

type DefaultAction = {
  type: string;
  payload: any;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<DefaultAction>;
};

const initialState: InitialStateType = {
  address: initialAddressState,
  user: initialStateUser,
  menuMobile: menuMobileInitialState,
  search: searchInitialState,
  cart: cartInitialState,
  payment: paymentInitialState,
  order: orderInitialState,
  listAddress: initialStateListAddress,
  logged: isLoggedInitialState,
};

const mainReducer = (state: InitialStateType,action: DefaultAction):InitialStateType => {
  return {
    address: addressReducer(state.address, action as TypeAddressAction),
    user: userReducer(state.user, action as TypeUserAction),
    menuMobile: menuMobileReducer(state.menuMobile, action as ChangeMenuAction),
    search: searchReducer(state.search, action as ChangeSearchAction),
    cart: CartReducer(state.cart, action as typeCartAction),
    payment: PaymentReducer(state.payment, action as typesPaymentAction),
    order: orderReducer(state.order, action as TypeOrderAction),
    listAddress: listAddressReducer(state.listAddress,action as TypeListAddresstAction),
    logged: isLoggedReducer(state.logged, action as ChangeLoggedAction),
  };
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const useCustomContext = () => useContext(Context);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
