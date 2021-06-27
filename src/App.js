import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default function App() {
  const [isUpdate, setUpdate] = React.useState(false);

  function ListElement() {
    // let inputValue = document.querySelector('.input').value;
    // console.log(inputValue);
    return (
      <React.Fragment>
        <li>Praveen</li>
        <button>Update</button>
        <button>Delete</button>
      </React.Fragment>
    );
  }

  const addItem = () => {
    let appendArea = document.querySelector('.appendingArea');
    appendArea.append(<li>Praveen</li>);
  };

  return (
    <div>
      <input type="text" class="input" />
      <button type="submit" onClick={addItem}>
        {isUpdate ? 'Update' : 'Add'}
      </button>
      <div class="appendingArea" />
      <ListElement />
    </div>
  );
}
