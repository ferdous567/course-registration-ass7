
import './App.css';
import Cources from './Components/Cources/Cources';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCart, setSelectCart] = useState([]);

  const handleSelectButton = (course) =>{
    const exist = selectCart.find(item => item.id === course.id );
    let count = course.credits;
    if(exist){
      toast('Opps!! Course are already selected');
    }
    else{
      selectCart.forEach(item => {
        count = count + item.credits;
      });
      // console.log(count)
      const newSelectCart = [...selectCart, course];
      setSelectCart(newSelectCart);
    }
    // console.log('select button clocked', course);
    
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Cources handleSelectButton = {handleSelectButton}></Cources>
      <ToastContainer></ToastContainer>
      <Cart selectCart = {selectCart}></Cart>
      </div>
      
      
    </>
  )
}

export default App
