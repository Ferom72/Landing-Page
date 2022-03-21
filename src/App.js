import './CSS/StyleSheet.css'
import MainPage from './Pages/MainPage'
import AboutMe from './Pages/AboutMe'
import MyWork from './Pages/MyWork'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path = '/' element = {<MainPage/>}></Route>
            <Route path = '/aboutMe' element = {<AboutMe/>}></Route>
            <Route path = '/myWork' element = {<MyWork/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
