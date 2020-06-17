import reducer, { initialState, increment, decrement, reset } from './index';

describe('counterSlice', () => {
  it('should properly increment the counter', () => {
    const nextState = reducer(initialState, increment());
    expect(nextState.value).toEqual(1);
  });

  it('should properly decrement the counter', () => {
    const nextState = reducer(initialState, decrement());
    expect(nextState.value).toEqual(-1);
  });

  it('should properly reset the counter', () => {
    const nextState = reducer(initialState, reset());
    expect(nextState.value).toEqual(0);
  });
});
