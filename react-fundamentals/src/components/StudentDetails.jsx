function StudentDetails(props) {

    console.log(props);
    
    return (

        <div className="m-4">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Name: {props.name}</b>
                </li>
                <li className="list-group-item">
                    Email: {props.email}
                </li>
                <li className="list-group-item">
                    Contact: {props.contact}
                </li>
                <li className="list-group-item">
                    Class: {props.standard}
                </li>
                <li className="list-group-item">
                    Subjects: {props.subjects}
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