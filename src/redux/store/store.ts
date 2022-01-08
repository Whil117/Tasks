import rootReducer from '@Redux/reducers/rootReducer'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@Redux/storage/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)

export { store, persistor }
