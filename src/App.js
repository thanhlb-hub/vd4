import logo from './logo.svg';
import './App.css';
import Clothes from './components/clother3';

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday 235",
  "Friday",
  "Saturday",
];

const kk = ["a","b","c","d","e","f","g"] ;

const test2 = () => {
  return  <b>Kích cỡ Test 651:</b>  
}
const App = (props) => {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 12026 abcd xxxyy 
          <dir> ttt {test2()} </dir>
          <b>Kích cỡ Test 652:</b> 
     
    <div>
      <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L" b="t1">Clothes 1</Clothes>
      <Clothes name="Váy" type="váy công chúa" color ="Trắng" size = "M" b="t2">Clothes 2</Clothes>

</div> 

          {/* <div>Today is {weekday[new Date().getDay()]}</div> */}
          <div>Today is {kk[new Date().getDay()]}</div>
        </a>
      </header>
    </div>
  );
}

export default App;
