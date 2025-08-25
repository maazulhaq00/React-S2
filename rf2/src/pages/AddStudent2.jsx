import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent2() {

    let [student, setStudent] = useState({
        fullname: "",
        email: "",
        contact: ""
    })

    let navigate = useNavigate()

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name)
        // console.log(value)
        setStudent({
            ...student,
            [name]: value
        })
    }

    function handleClick(){
        if(student.fullname != ""){
            navigate(`/student`,{
                state: {
                    ...student
                }
            })
        }else{
           alert("Full Name Required") 
        }
    }

    return (
        <>
            <h3>Add Student</h3>
            <label>
                Name:
                <input type="text" value={student.fullname}
                    onChange={handleChange} name="fullname" />
            </label> <br />
            <label>
                Email:
                <input type="email" value={student.email}
                    onChange={handleChange} name="email" />
            </label> <br />
            <label>
                Contact:
                <input type="text" value={student.contact}
                    onChange={handleChange} name="contact" />
            </label><br />

            <button onClick={handleClick}>Add Student</button>

            <h3>Student Record</h3>
            <p>Student Name: {student.fullname}</p>
            <p>Student Email: {student.email}</p>
            <p>Student Contact: {student.contact}</p>
        </>
    );
}

export default AddStudent2;