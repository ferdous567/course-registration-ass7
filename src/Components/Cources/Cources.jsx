import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Cources = ({handleSelectButton}) => {

    const [cources, setCources] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCources(data))
    }, [])

    return (
        
        <div className="w-3/4 m-8"> 
            {/* <h3 className="text-4xl">All Courses: {cources.length}</h3> */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                cources.map(course => <Course key={course.id} 
                    handleSelectButton ={handleSelectButton}
                course ={course}></Course>)
            }
            </div>
        </div>
    );
};

Cources.propTypes = {
    
    handleSelectButton:PropTypes.func
}

export default Cources;