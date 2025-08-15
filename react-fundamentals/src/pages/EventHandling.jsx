function EventHandling() {

    let isLight = true;

    let handleOnClick = () => {
        if(isLight){
            isLight=false
            document.getElementById("myPageBody").style.backgroundColor = "black"
            document.getElementById("myPageBody").style.color = "white"
        }else{
            isLight=true
            document.getElementById("myPageBody").style.backgroundColor = "white"
            document.getElementById("myPageBody").style.color = "black" 
        }
    }


    return (
        <div id="myPageBody" style={{ height: "100vh", textAlign: "center" }}>
            <br />
            <h4>Hello World</h4>
            <br />
            <button onClick={handleOnClick}>Change Color</button>

        </div>
    );
}

export default EventHandling;