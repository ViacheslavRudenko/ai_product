import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerRow = ({ name, instructions, id, user_id }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://ttestt.shop/api/assistants/get?assistant_id=${id}&user_id=${user_id}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => { console.error("Error fetching data:", error); })
    };


    return (
        <tr className='TableRow' >
            <td class="py-3 table_text align-middle">{id}</td>
            <td class="py-3 table_text align-middle">{name}</td>
            <td class="py-3 table_text align-middle">{instructions}</td>
            {/* <td class="py-3 table_text align-middle">{phone}</td>
            <td class="py-3 table_text align-middle">{email}</td>
            <td class="py-3 table_text align-middle">**********</td> */}
            <td class="py-3 table_text align-middle"><div className='status_active' onClick={handleSubmit}>Edit</div></td>
        </tr>
    );
};
export default CustomerRow;

