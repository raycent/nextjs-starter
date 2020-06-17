import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import store from 'src/store';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
