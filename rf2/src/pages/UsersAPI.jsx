import { useEffect, useState } from "react";

function UserAPI() {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setUsers(data)
            })
    }, [])



    return (
        <>
            <h3>Users</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Company Name</th>
                </tr>
                {
                    users.map((user) => {

                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )

                    })
                }

            </table>
        </>
    )
}

export default UserAPI;