import StudentDetails from '../components/StudentDetails'

function StudentDetailsPage() {
    return (
        <>
            <StudentDetails name="Hamza" email="h@gmail.com" contact="1234" age={19}
                standard="ADSE-1" subjects="Flutter, React" />

            <StudentDetails name="Tabish" email="t@gmail.com" contact="5678" age={15}
                standard="ADSE-1" subjects="Flutter, React" />

            <StudentDetails name="Usman" email="u@gmail.com" contact="9101" age={21}
                standard="ADSE-1" subjects="Flutter, React" />

            <StudentDetails name="Saad" email="s@gmail.com" contact="3421" age={16}
                standard="ADSE-1" subjects="Flutter, React" />
        </>
    );
}

export default StudentDetailsPage;