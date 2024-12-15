function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Please add items to your list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.floor((numPacked / numItems) * 100);

  const message =
    percentage === 100 ? (
      <em>You got everything ready to go</em>
    ) : (
      <em>
        You have {numItems} items on you list, and you already packed{' '}
        {numPacked} ({percentage ? percentage : 0}%)
      </em>
    );

  return <footer className='stats'>{message}</footer>;
}

export default Stats;
