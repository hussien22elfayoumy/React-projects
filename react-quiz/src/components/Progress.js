function Progress({ index, questionNum, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={questionNum} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {questionNum}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
