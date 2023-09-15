import PropTypes from 'prop-types';
import Singlecart from '../Singlecart/Singlecart';

const Cart = ({selectCart}) => {
    
    return (
        <div className="w-1/4 bg-gray-100 rounded-xl h-72 mt-20 mr-5 p-5">
            <h3 className="text-blue-600 font-semibold border-b-2">Credit Hour Remaining 7 hr</h3>
        <div className='border-b-2 space-y-1 mt-2'>
        <h2 className="text-2xl font-bold ">Course Name : {selectCart.length}</h2>
        {
            selectCart.map(singlecart => <Singlecart key={singlecart.id} 
                singlecart={singlecart}></Singlecart>)
         }
         
        </div>
        <h2 className="text-lg font-normal">Total Credit Hour : </h2>
        </div>
    );
};


Cart.propTypes = {
    
    selectCart:PropTypes.array
}
export default Cart;