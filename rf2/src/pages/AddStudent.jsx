import { useState } from "react";

function AddStudent() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("")


    function handleNameChange(e) {
        // console.log(e.target.name);
        // console.log(e.target.value);

        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleContactChange(e) {
        setContact(e.target.value)
    }





    return (
        <>
            <h3>Add Student</h3>
            <label>
                Name:
                <input type="text" value={name}
                    onChange={handleNameChange} name="fullname" />
            </label> <br />
            <label>
                Email:
                <input type="email" value={email}
                    onChange={handleEmailChange} name="email" />
            </label> <br />
            <label>
                Contact:
                <input type="text" value={contact}
                    onChange={handleContactChange} name="contact" />
            </label><br />
            <button>Add Student</button>
        </>
    );
}

export default AddStudent;