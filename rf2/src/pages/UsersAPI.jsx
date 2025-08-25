import { useEffect, useState } from "react";

function UserAPI() {

    let { users, setUsers } = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
            })
        

    }, [])



    return (
        <>
            <h3>Users</h3>
        </>
    )
}

export default UserAPI;