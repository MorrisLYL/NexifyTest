const NewItem = ({newItem, setNewItem}) =>{

    const handleName = index => e => {
        var newArr = [...newItem]; 
        newArr[index].Name = e.target.value;
        setNewItem(newArr);
      }

    const handleDate = index => e => {
        var newArr = [...newItem];
        newArr[index].DateOfBirth = e.target.value;
        setNewItem(newArr);
    }

    const handleSalary = index => e => {
        var newArr = [...newItem];
        newArr[index].Salary = e.target.value;
        setNewItem(newArr);
    }

    const handleAdd = index => e =>{
        var newArr = [...newItem];
        newArr[index].Address = e.target.value;
        setNewItem(newArr);
    }    

      

    return(
        <tbody>
            {newItem.map((item, id)=>
                <tr key={item.id}>
                    <input
                        className="name" type="text"
                        value={item.Name}
                        onChange={handleName(id)}
                    />
                    <input
                        className="birthday" type="date"
                        value={item.DateOfBirth}
                        onChange={handleDate(id)}
                    />
                    <input
                        className="salary" type="range"
                        value={item.Salary}
                        onChange={handleSalary(id)}
                    />
                    <input
                        className="address" type="text"
                        value={item.Address}
                        onChange={handleAdd(id)}
                    />                                                            
                </tr>
            )}
        </tbody>
    )
}

export default NewItem;