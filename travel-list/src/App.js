import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(i) {
    setItems((items) => [...items, i]);
  }

  function handelDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearItems() {
    const confirmed = window.confirm(
      'Are you really want to clear all the list'
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handelDeleteItems}
        onClearItems={handelClearItems}
        onToggleItems={handelToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}
