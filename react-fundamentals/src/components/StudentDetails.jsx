
import "./StudentDetails.css"

function StudentDetails(props) {

    const myHeadingStyle = {
        color: 'white',
        backgroundColor: 'rgb(12, 0, 39)'
    }

    // console.log(props);
    let {name, email, contact,standard,age, subjects} = props
    return (

        <div className="mynewcontainer">
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={myHeadingStyle}>
                    <b>Name: {name}</b>
                </li>
                <li className="list-group-item">
                    Email: {email}
                </li>
                <li className="list-group-item">
                    Contact: {contact}
                </li>
                <li className={`list-group-item ${age > 18 ? 'older-people': 'younger-people'}`} 
                // style={{backgroundColor: age > 18 ? 'rgb(173, 216, 173)' : 'rgb(246, 200, 255)'}}
                >
                    Age: {age}
                </li>
                <li className="list-group-item">
                    Class: {standard}
                </li>
                <li className="list-group-item" >
                    Subjects: {subjects}
                </li>
            </ul>
        </div>

    );
}

export default StudentDetails;


// function StudentDetails(props) {
    // let studentData = {
    //     name: "Abdul Muheet",
    //     email: "muheet@gmail.com",
    //     contact: "0312-1234567",
    //     standard: "SSC - II",
    //     subjects: "Maths, Chemistry"
    // }

    // return (

    //     <div className="m-4">
    //         <ul className="list-group list-group-flush">
    //             <li className="list-group-item">
    //                 <b>Name: {studentData.name}</b>
    //             </li>
    //             <li className="list-group-item">
    //                 Email: {studentData.email}
    //             </li>
    //             <li className="list-group-item">
    //                 Contact: {studentData.contact}
    //             </li>
    //             <li className="list-group-item">
    //                 Class: {studentData.standard}
    //             </li>
    //             <li className="list-group-item">
    //                 Subjects: {studentData.subjects}
    //             </li>
    //         </ul>
    //     </div>

    // );
// }