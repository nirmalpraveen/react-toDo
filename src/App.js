import React from 'react';
import './style.css';

export default function App() {
  const [isUpdate, setUpdate] = React.useState(false);

  const addItem = () => {
    let inputElement = document.querySelector('.input');
    let listElement = document.createElement('LI');
    let text = document.createTextNode(inputElement.value);
    console.log(inputElement.value);
    listElement.appendChild(text);
    let updateButton = document.createElement('BUTTON');
    let updateText = document.createTextNode('Update');
    updateButton.appendChild(updateText);
    listElement.append(updateButton);
    let deleteButton = document.createElement('BUTTON');
    let deleteText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteText);
    listElement.append(deleteButton);
    let appendingArea = document.querySelector('.appendingArea');
    appendingArea.append(listElement);
  };
  return (
    <div>
      <input type="text" class="input" />
      <button type="submit" onClick={addItem}>
        {isUpdate ? 'Update' : 'Add'}
      </button>
      <div class="appendingArea" />
    </div>
  );
}
