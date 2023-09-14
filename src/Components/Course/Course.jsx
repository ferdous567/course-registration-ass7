import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';

const Course = ({course}) => {
   
    const {course_name, details, cover_img, price, credits} = course;
    return (
        <div className='bg-gray-100 rounded-xl h-auto w-68 m-3 p-5 text-center items-center space-y-2'>
            <img className='h-36 w-full rounded-xl' src={cover_img} alt="" />
            <h3 className='h-12 text-xl font-semibold'>{course_name}</h3>
            <p className=''>{details}</p>
            <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
            <span className='text-xl'><FaDollarSign></FaDollarSign></span>
            <p>Price: {price}</p>
            </div>
            
            <div className='flex gap-2 items-center '>
            <span className='text-xl'><FaBookOpen></FaBookOpen></span>
            <p>{credits}hr</p>
            </div>
            
            </div>
            <button className='m-2 p-3 bg-blue-500 rounded-2xl w-full'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object
}
export default Course;