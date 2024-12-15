import { useQuiz } from '../contexts/QuizContext';

function NextButton() {
  const { dispatch, answer, index, questionsNum } = useQuiz();
  // const type = index === questionsNum ? 'end' : 'nextQusetion';
  if (answer === null) return null;
  if (index < questionsNum - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQusetion' })}
      >
        Next
      </button>
    );
  if (index === questionsNum - 1)
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'end' })}>
        Finish
      </button>
    );
}

export default NextButton;
