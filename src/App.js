import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDetails from './components/StudentDetails';
import StudentManagement from './components/StudentManagement';
import Header from './components/Header';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';


 export const userContext = createContext();

function App() {
  const [data,setData] = useState([])
  return (
  <>
  <userContext.Provider value={{data,setData}}>
  <Header />
  <Routes>
    <Route path='/' element={<StudentDetails />} />
    <Route path='/studentmanagement' element={<StudentManagement />} />
    <Route path='/register' element={<Register />} />
  </Routes>
  </userContext.Provider>
  
  </>
  );
}

export default App;
