import {useState} from 'react';
import Update from './Update';
import Title from './Title';
import Content from './Content';
import Add from './Add';
import NewItem from './NewItem';
import Save from './Save';

function App() {
  const [updateData, setUpdateData] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const getUrl = "http://nexifytw.mynetgear.com:45000/api/Record/GetRecords"
  const postUrl = "http://nexifytw.mynetgear.com:45000/api/Record/SaveRecords"
  
  const getData = fetch(getUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data.Data;
    })
    .catch(error => {
      console.log("ERROR", error);
    })
  
  const handleUpdate = (e) => {
    e.preventDefault();
    getData.then((data) =>{
      console.log(data);
      setUpdateData(data)
    })
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    const id = newItem.length ? newItem[newItem.length -1].id + 1 : 1;
    const defaultItem  = {id, Name: '', DateOfBirth: '', Salary: 0, Address: '', newItem};
    const listItems = [...newItem, defaultItem];
    setNewItem(listItems);
  }

  const handleSave = (e) => {
    e.preventDefault();
    console.log("SAVE")
    fetch(postUrl,{
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {'Content-type': 'application/json'},
    })
    .then((response)=> response.json())
    .then((data) =>{
      if(data.Success){
        console.log("GOOD")
        getData.then((data) =>{
          console.log(data);
          setUpdateData(data)
        })
      }
    })
    .catch(error =>{
      console.log("ERROR", error);
    });
  }
  
  return (
    <div className="App">
      <div className="block1">
        <Add 
          handleAdd={handleAdd}
        />
        <Save
          handleSave={handleSave}
        />
        <Update
          handleUpdate={handleUpdate}
        />        
      </div>
      <div className="block2">
        <table>
          <Title />
          <NewItem
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <Content 
            updateData={updateData}
          />
        </table>
      </div>
    </div>
  );
}

export default App;
