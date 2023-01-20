import {useState} from 'react';
import './App.css';
import Update from './Update';
import Title from './Title';
import Content from './Content';
import Add from './Add';

function App() {
  const [updateData, setUpdateData] = useState([]);
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
  
  const handleAdd = () => {
    console.log("ADD")
  }
  
  return (
    <div className="App">
      <Add 
        handleAdd={handleAdd}
      />
      <Update 
        updateData={updateData}
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
