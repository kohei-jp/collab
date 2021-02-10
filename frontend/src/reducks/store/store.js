import {
  createStore as reduxCreateStore, // createStoreを別名import
  combineReducers,
  applyMiddleware,
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk'
import {UsersReducer} from '../users/reducers';

export default function createStore(history){  //ここで定義して、index.jsで呼び出す
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
}