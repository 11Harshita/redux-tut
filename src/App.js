import logo from './logo.svg';
import HomeContains from './containers/HomeContains'
import HeaderContainer from './containers/HeaderContainer';
import './App.css';

function App() {
  return(
    <div className='App'>
      <HeaderContainer/>
      <HomeContains/>

    </div>
  )
}

export default App;
