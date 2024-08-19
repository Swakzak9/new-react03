import React, {Component} from "react";
import './index.css'
class App extends Component{
  constructor(props){
    super(props) 
      this.state = {
        person: {
          fullname: 'Kelly Thurmani',
          bio: 'A psychologist from Ibadan',
          imgSrc: '/Images/p-r.jpeg' ,
          profession:  'Psychological Doctor' 
        },
        shows: false,
        mountTime:0,
      }
    
  }
  componentDidMount(){
    this.interval= setInterval(()=>{
    this.setState((prevState) =>({
      mountTime:prevState.mountTime + 1
    }));
  }, 1000);
}

componentWillUnmount(){
  clearInterval(this.interval);
}
toggleShow= () => {
  this.setState((prevState)=> ({
  shows:!prevState.shows
}));

};

render() {
  const { person, shows, mountedTime } = this.state;
  return (
    <div className="App">
      <button onClick={this.toggleShow}>
        {shows ? 'Hide Profile' : 'Show Profile'}
      </button>
      {shows && (
        <div>
          <h1>{person.fullName}</h1>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Profile" />
          <p>{person.profession}</p>
        </div>
      )}
      <p>Time since component mounted: {mountedTime} seconds</p>
    </div>
  );
}
}

export default App;