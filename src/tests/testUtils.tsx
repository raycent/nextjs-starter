import { ReactElement } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import rootReducer from 'src/store/rootReducer';

const render = (
  ui: ReactElement,
  { store = configureStore({ reducer: rootReducer }), ...renderOptions } = {}
): RenderResult => {
  const wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
