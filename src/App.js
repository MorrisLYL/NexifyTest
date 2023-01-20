import {useState} from 'react';
import './App.css';
import Update from './Update';
import Title from './Title';
import Content from './Content';
import Add from './Add';

function App() {
  const [updateData, setUpdateData] = useState([]);
  // const [newItem, setNewItem] = useState([]);
  const getUrl = "http://nexifytw.mynetgear.com:45000/api/Record/GetRecords"
  
  const update = fetch(getUrl)
    .then((response) => response.json())
    .then((data) => {
      return data.Data;
    })
    .catch(error => {
      console.log(error);
    })
  
  const handleUpdate = () => {
    update.then((data) =>{
      console.log(data);
      setUpdateData(data)
    })
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    const id = updateData.length ? updateData[updateData.length -1].id - 1 : 1;
    const defaultItem  = {id, Name: '', DateOfBirth: '2023-01-20', Salary: 50000, Address: '', updateData};
    const listItems = [...updateData, defaultItem];
    setUpdateData(listItems);
  }
  
  return (
    <div className="App">
      <Add 
        handleAdd={handleAdd}
        updateData={updateData}
      />
      <Update
        handleUpdate={handleUpdate}
      />    
      <table>
        <Title />
        <Content 
          updateData={updateData}
        />
      </table>
    </div>
  );
}

export default App;
