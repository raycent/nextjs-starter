import { render } from 'tests/testUtils';
import IndexPage from 'pages/index';

describe('IndexPage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
