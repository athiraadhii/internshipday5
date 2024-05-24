import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddEmployees from './components/AddEmployees';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/a' element={<AddEmployees data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}/>
        <Route path='/B' element={<View/>}/>

        
        


        
      </Routes>
    </div>
  );
}

export default App;
