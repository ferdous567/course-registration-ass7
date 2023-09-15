
import './App.css';
import Cources from './Components/Cources/Cources';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCart, setSelectCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleSelectButton = (course) =>{
    let price = 0;
    price = price + course.price;
    selectCart.forEach(item => {
      price = price + item.price;
    });
   

    
    const exist = selectCart.find(item => item.id === course.id );
    let count = course.credits;
    
    if(exist){
      toast('Opps!! Course are already selected');
    }
    else{
      selectCart.forEach(item => {
        count = count + item.credits;
      });
     
      const totalRemaining = 20 - count;
      
      if(count > 20){
        return  toast('Sorry!! Insufficient Balancnce.')
      }

      
        
        setTotalCost(count);
        const newSelectCart = [...selectCart, course];
        setSelectCart(newSelectCart); 
        setRemaining(totalRemaining);
        setTotalPrice(price);
        
      
    }
    // console.log('select button clocked', course);
    
  };

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Cources handleSelectButton = {handleSelectButton}></Cources>
      <ToastContainer></ToastContainer>
      <Cart selectCart = {selectCart} totalCost ={totalCost
      } remaining = {remaining} totalPrice ={totalPrice}> </Cart>
      </div>
      
      
    </>
  )
}

export default App
