import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../user/user-reducers';
import cartReducer from '../cart/cart-reducer';
import directoryReducer from '../directory/directory-reducer';
import collectionReducer from '../collection/collection-reducer';
import orderReducer from '../orders/order-reducer';

const persistConfig = {
     key: 'root',
     storage,
     whitelist: ['cart']
 }

 const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: collectionReducer,
    order: orderReducer
});

export default persistReducer(persistConfig, rootReducer);

