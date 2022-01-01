import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Sidebar from './Component/Home/Sidebar';
import About from './Component/Home/About/About';
import Projects from './Component/Projects/Projects';
import Services from './Component/Services/Services';
import ContectUs from './Component/Home/ContectUs/ContectUs';
import Details from './Component/Projects/Details';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/Services' element={<Services></Services>}></Route>
      <Route path='/Contectus' element={<ContectUs></ContectUs>}></Route>
    </Routes>
  
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
