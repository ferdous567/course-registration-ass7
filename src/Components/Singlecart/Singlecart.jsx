import PropTypes from 'prop-types';

const Singlecart = ({singlecart}) => {
    const {course_name} = singlecart;
    return (
       

        <div>
                <p>{course_name}</p>
            
        </div>
    );
};


Singlecart.propTypes = {
    
    singlecart:PropTypes.object
}
export default Singlecart;