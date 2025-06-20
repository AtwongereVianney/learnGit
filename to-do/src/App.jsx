import { useState } from 'react'
import './App.css'
import { Trash2, Pencil } from 'lucide-react';
import editItem from './vianney.jsx'; // edit-iconfunction by vianey 

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Edit function by vianney
  // function editItem(index) {
  //   const newValue = prompt("Edit task:", items[index]);
  //   if (newValue !== null && newValue.trim() !== "") {
  //     setItems(prevItems => {
  //       const updated = [...prevItems];
  //       updated[index] = newValue;
  //       return updated;
  //     });
  //   }
  // }

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className='header'>
        <h1>To Do List</h1>
      </div>
      <div className='content'>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className='todo-left'>
                <input type="checkbox" className='checkbox' />
              </div>
              <div className='todo-middle'>
                {item}
              </div>
              <div className='todo-right'>
                <Trash2 className='trash-icon' />
                <Pencil
                  className='edit-icon'
                  onClick={() => editItem(items, index, setItems)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='input'>
        <input
          type="text"
          placeholder='Add a new task'
          className='input-field'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button onClick={handleAdd} type='submit' className='add-button'>Add</button>
      </div>
    </>
  )
}

export default App
