
import './App.css';
import Cources from './Components/Cources/Cources';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex '>
      <Cources></Cources>
      <Cart></Cart>
      </div>
      
      
    </>
  )
}

export default App
