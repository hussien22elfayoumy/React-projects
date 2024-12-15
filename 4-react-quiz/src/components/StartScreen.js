import { useQuiz } from '../contexts/QuizContext';

function StartScreen() {
  const { questionsNum, dispatch } = useQuiz();
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz</h2>
      <h3>{questionsNum} questions to test your React matery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
