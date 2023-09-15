import PropTypes from 'prop-types';

const Singlecart = ({singlecart}) => {
    const {course_name} = singlecart;
    return (
       

        <div>
               <li> {course_name}</li>
            
        </div>
    );
};


Singlecart.propTypes = {
    
    singlecart:PropTypes.object
}
export default Singlecart;