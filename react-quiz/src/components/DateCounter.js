import { useReducer } from 'react';

function reduce(state, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'defineCount':
      return { ...state, count: action.payload };
    case 'defineStep':
      return { ...state, step: action.payload };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      throw new Error('false');
  }
}

function DateCounter() {
  const [state, dispatche] = useReducer(reduce, {
    count: 0,
    step: 1,
  });

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatche({ type: 'dec' });
  };

  const inc = function () {
    dispatche({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatche({ type: 'defineCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatche({ type: 'defineStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatche({ type: 'reset' });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
