//import Header from "./Greeting"
const Header = ({job}) => {
    return (
      <div>
          <h1 style={newStyling}>greeting </h1>
          <p>{job}</p>
      </div>
    )
  }

  Header.defaultProps ={
    job : "working well"
  }

function Hello() {
    let name= "Joel"
    let title= "a Web developer"

    return( 
        <div className="container">
            <h1>Hello! I am {name}</h1>
            <p>I am {title}</p>
            <Header job="straight up"/>
        </div>    
    );
    }

    const newStyling = { 
        color: "red"
    }


const texter = <div>
    <h1>HELLO WORLD</h1>
    <p>Lets get started</p>
</div>


ReactDOM.render(<Hello/>, document.getElementById('mydiv'))

