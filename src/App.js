import './App.css';
import Profile from './Profile/Profile';
import image from './myimage.jpg' ;
import PropTypes from "prop-types";
function App() {
  return (
    <div className="App">
      <Profile name='Ghassen' lastName='Ben Amor' profession='IT engineer'
       bio='I like to use react for front end dev ' img={image}/>
    </div>
  );
}

export default App;
