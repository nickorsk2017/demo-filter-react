import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from 'store/reducers';

export function ProvidersWrapper(props: AppProps["pageProps"]) {
  const {children} = props;
  const store = createStore(combineReducers(reducers));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}