
import './App.css'
import NavBar from './components/NavBar'
import StudentDetails from './components/StudentDetails'

function App() {

  return (
    <>
      <NavBar />

      <StudentDetails name="Hamza" email="h@gmail.com" contact="1234" 
      standard="ADSE-1" subjects="Flutter, React" />

      <StudentDetails name="Tabish" email="t@gmail.com" contact="5678" 
      standard="ADSE-1" subjects="Flutter, React" />

      <StudentDetails name="Usman" email="u@gmail.com" contact="9101" 
      standard="ADSE-1" subjects="Flutter, React" />

      <StudentDetails name="Saad" email="s@gmail.com" contact="3421" 
      standard="ADSE-1" subjects="Flutter, React" />


    </>
  )
}

export default App
