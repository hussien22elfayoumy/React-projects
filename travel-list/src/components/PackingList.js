import { useState } from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItems, onClearItems, onToggleItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedBy;

  if (sortBy === 'input') sortedBy = items;

  if (sortBy === 'description')
    sortedBy = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedBy = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedBy.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed stats</option>
        </select>
        <button onClick={() => onClearItems()}>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;
