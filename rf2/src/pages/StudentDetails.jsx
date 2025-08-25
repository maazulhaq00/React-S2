import { useLocation, useParams } from "react-router-dom";

function StudentDetails() {

    // let { name } = useParams();

    let location = useLocation();

    console.log(location);
    console.log(location.state);

    return (
        <>
            <h3>Student Record</h3>
            <p>Student Name: {location.state.fullname}</p>
            <p>Student Email: {location.state.email}</p>
            <p>Student Contact: {location.state.contact}</p>
        </>
    );
}

export default StudentDetails;