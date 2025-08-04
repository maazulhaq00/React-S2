import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {

  let name = "Saad Mansoori";
  let students = ["Muheet", "Hamza", "Saad", "Anas"]
  let imgUrls = [
    'https://media.gettyimages.com/id/155382009/photo/young-man-profile.jpg?s=612x612&w=gi&k=20&c=I6ZG6_CuC13QK_w6GA5vU1j22IlvcvJXXQdBYBFktZ4=',
    'https://img.freepik.com/free-photo/black-man-posing_23-2148171639.jpg',
    'https://www.shutterstock.com/image-photo/happy-young-european-professional-business-260nw-2500948659.jpg',
    'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg'
  ]


  return (
    <div>
      {/* <h1>Hello</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda, quam, exercitationem possimus aliquid praesentium ratione repellat
        consequatur necessitatibus voluptatum accusantium veniam eligendi maiores ut.
        Quidem laborum voluptates itaque quae ipsam!</p> */}
      <h1>Hello {name} </h1>
      <div>{students}</div>

      <ul>

        {
          students.map((student) => {
            return (
              <li>
                {student}
              </li>
            )
          })
        }

      </ul>

      <div>
        {
          imgUrls.map((img) => {
            return(
              <div>
                <img src={img} alt="prof pic" />
                </div>
            )
          })
        }
      </div>

      {/* <Home />
        <Contact />
        <About /> */}
    </div>
  );
}

export default App;