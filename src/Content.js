const Content = ({updateData}) => {
    return(
        <tbody>
            {updateData.map((object, id) =>
                <tr key={id}>
                    <input className="name" type="text" value={object.Name}></input>
                    <input className="birthday" type="date" value={object.DateOfBirth.slice(0, 10)}></input>
                    <input className="salary" type="range" min="0" max="100000" value={object.Salary}></input>
                    <input className="address" type="text" value={object.Address}></input>
                </tr>
            )}
        </tbody>

    )
};

export default Content;