import { render } from 'src/tests/testUtils';
import IndexPage from 'src/pages/index';

describe('IndexPage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
