const Content = ({updateData}) => {
    return(
        <tbody>
            {updateData.map((object, id) =>
                <tr key={id}>
                    <td>
                        <input className="name" type="text" value={object.Name}></input>
                    </td>
                    <td>
                        <input className="birthday" type="date" value={object.DateOfBirth.slice(0, 10)}></input>
                    </td>
                    <td>
                        <input className="salary" type="range" min="0" max="100000" value={object.Salary}></input>
                    </td>
                    <td>
                        <input className="address" type="text" value={object.Address}></input>
                    </td>
                </tr>
            )}
        </tbody>

    )
};

export default Content;