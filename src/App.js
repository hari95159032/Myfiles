
import {Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import UserPage from './Components/UserPage';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/user' element={<UserPage></UserPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}


export default App;
