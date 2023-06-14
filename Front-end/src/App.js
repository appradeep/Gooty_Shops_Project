import logo from './logo.svg';
import { Routes, Route,} from 'react-router-dom';
import {FirstPage} from './component/FirstPage';
import {HomePage} from './component/HomePage';
import {Hospital} from './component/Hospital';
import {Theatre} from './component/Theatre';
import {ShoppingMalls} from './component/ShoppingMalls';
import {Cafes} from './component/Cafes';
import {Restaurents} from './component/Restaurents';
import {Markets} from './component/Markets';
import {BarberShops} from './component/BarberShops';
import {MobileShops} from './component/MobileShops';
import { VisitPage } from './component/VisitPage';
import { Signup } from './component/Signup';
import { LoginPage } from './component/LoginPage';
import {AboutUs} from './component/AboutUs';
import {ContactUs} from './component/ContactUs';

function App() {
  return (
    <div className="App">
     
      <Routes>
      {/* <Route path='/' element={<FirstPage/>}/> */}
       <Route path="/" element={<HomePage/>} />
       <Route path="AboutUs" element={<AboutUs/>} />
       <Route path='ContactUs' element={<ContactUs/>} />
       <Route path="LoginPage" element={<LoginPage/>} />
       <Route path='VisitPage' element={<VisitPage/>} />
       <Route path='Hospital' element={<Hospital/>} />
       <Route path='Theatre' element={<Theatre/>} />
       <Route path='ShoppingMalls' element={<ShoppingMalls/>} />
       <Route path='Cafes' element={<Cafes/>} />
       <Route path='Restaurents' element={<Restaurents/>} />
       <Route path='Markets' element={<Markets/>} />
       <Route path='BarberShops' element={<BarberShops/>} />
       <Route path='MobileShops' element={<MobileShops/>} />
       <Route path='Signup' element={<Signup/>}/>

      </Routes>  
      {/* <FirstPage/> */}
      {/* <ContactUs/> */}
      
    </div>
  );
}

export default App;
