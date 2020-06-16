import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/store/rootReducer';
import { increment, decrement, reset } from 'src/store/counter';

const IndexPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const counter: number = useSelector(
    (state: RootState) => state.counterReducer.value
  );

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <>
      {counter}
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default IndexPage;
