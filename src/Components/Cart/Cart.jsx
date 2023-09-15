import PropTypes from 'prop-types';
import Singlecart from '../Singlecart/Singlecart';

const Cart = ({selectCart, remaining, totalCost, totalPrice}) => {
    
    return (
        <div className="w-1/4 bg-gray-100 rounded-xl h-full mt-12 mr-5 p-5">
            <h3 className="text-blue-600 font-semibold border-b-2">
                Credit Hour Remaining {remaining}hr</h3>
        <div className='border-b-2 space-y-1 mt-2 p-2'>
        <h2 className="text-2xl font-bold ">Course Name </h2>
        {
            selectCart.map(singlecart => <Singlecart key={singlecart.id} 
                singlecart={singlecart}></Singlecart>)
         }
         
        </div>
        <h2 className="text-lg font-normal mt-4 border-b-2 p-2">Total Credit Hour : {totalCost}hr</h2>
        <h2 className="text-lg font-normal mt-4 ">Total Price : {totalPrice} USD</h2>
        </div>
    );
};


Cart.propTypes = {
    
    selectCart:PropTypes.array,
    remaining:PropTypes.number,
    totalCost:PropTypes.number,
    totalPrice:PropTypes.number
}
export default Cart;