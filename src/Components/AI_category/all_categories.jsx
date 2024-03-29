import React, { useEffect, useState } from 'react';
import Header from '../Header/header'
import CustomerRow from "./category_data"
import './category.css';
function All_categories() {

    const [customersData, setCustomersData] = useState([]);
    useEffect(() => {
        fetch("https://ttestt.shop/api/assistants/getAll?user_id=8", {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setCustomersData(data)
                // console.log("/////")
                // console.log(customersData)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])



    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2>All Assistants</h2>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='table_header'>Id</th>
                                <th className='table_header'>Name</th>
                                <th className='table_header'>Instruction</th>
                                <th className='table_header'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customersData.map((customer, index) => (
                                <CustomerRow key={index} {...customer} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default All_categories