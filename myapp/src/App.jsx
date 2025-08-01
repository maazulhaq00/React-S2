import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {

  let name = "Maaz Ul Haq";
  let students = ["Muheet", "Hamza", "Saad", "Anas"]


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
              return(
                <li>
                  {student}
                </li>
              )
            })
          }

        </ul>

        {/* <Home />
        <Contact />
        <About /> */}
    </div>
  );
}

export default App;