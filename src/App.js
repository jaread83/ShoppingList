import React, { useState } from 'react';
import './css/style.scss';
import ShoppingList from './ShoppingList';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
      setError('');
    } else {
      setError('Please enter a non-empty item.');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <div className="shoppingList">
        <h1>Shopping List</h1>
        <div className="shoppingList--form">
          <input
            placeholder="Add a new item..."
            className="input--add"
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addItem();
              }
            }}
            type="text" 
            value={newItem} 
          />
          <button className="button button--add" onClick={addItem}>Add</button>
        </div>

        {error && <p className="error">{error}</p>}

        <ShoppingList items={items} onDelete={deleteItem} />

        {items.length > 0 && (
          <button className="button button--clear" onClick={clearList}>Clear</button>
        )}
        
      </div>
    </div>
  );
}

export default App;