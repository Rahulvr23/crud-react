
import './App.css';
import Header from './Components/Header';
import Ediit from './Pages/Ediit';
import Main from './Pages/Main';
import { Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/edit/:id' element={<Ediit/>}/>
      </Routes>
    </div>
  );
}

export default App;
