import {useState} from 'react';
import './App.css';
import Update from './Update';
import Title from './Title';
import Content from './Content';
import Add from './Add';
import NewItem from './NewItem';
import Save from './Save';
import dateFormat from 'dateformat';

function App() {
  const [updateData, setUpdateData] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const getUrl = "http://nexifytw.mynetgear.com:45000/api/Record/GetRecords"
  const postUrl = "http://nexifytw.mynetgear.com:45000/api/Record/SaveRecords"
  
  // dateFormat(e.target.value, "yyyy-m-dd")


  // const getData = fetch(getUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     return data.Data;
  //   })
  //   .catch(error => {
  //     console.log("ERROR", error);
  //   })
  
  const handleUpdate = (e) => {
    e.preventDefault();
    // getData.then((data) =>{
    //   console.log(data);
    //   setUpdateData(data)
    // })
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    const id = newItem.length ? newItem[newItem.length -1].id + 1 : 1;
    const defaultItem  = {id, Name: '', DateOfBirth: '', Salary: 0, Address: '', newItem};
    const listItems = [...newItem, defaultItem];
    setNewItem(listItems);
  }

  // const postData =
  //   fetch(postUrl,{
  //     method: 'POST',
  //     body: JSON.stringify(newItem),
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //   .then((response)=> response.json())
  //   .then((data) =>{
  //     console.log("HERE", data)
  //     return data;
  //   })
  //   .catch(error =>{
  //     console.log("ERROR", error);
  //   });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("SAVE")
    console.log(newItem)
    // postData.then((data) =>{
    //   if(data.Success){
    //     console.log("HI")
        
    //   }
    // })
    // fect post and get  then setUpdateData
  }
  
  return (
    <div className="App">
      <Add 
        handleAdd={handleAdd}
      />
      <Save
        handleSave={handleSave}
      />
      <Update
        handleUpdate={handleUpdate}
      />    
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
  );
}

export default App;
