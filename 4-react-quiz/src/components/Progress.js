import { useQuiz } from '../contexts/QuizContext';

function Progress() {
  const { index, questionsNum, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className='progress'>
      <progress max={questionsNum} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {questionsNum}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
