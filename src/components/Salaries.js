import React, { useEffect } from 'react'


const Salaries = ({onSalaryChanged}) => {

    const handleChange = function(event) {

        let salary1 = document.getElementById('salary1').value
        // console.log(salary1);
        let salary2 = document.getElementById('salary2').value
        // console.log(salary2);

        onSalaryChanged(Number(salary1)+Number(salary2))
        
    }

    return (
        <>
        <label for='salary1'>Input Salary Here: </label>
        <input type='number' id='salary1'  onChange={handleChange}></input>
        <label for='salary2'>Input Salary2 Here: </label>
        <input type='number' id='salary2' onChange={handleChange}></input>
        {/* <p>I'm the total:</p> */}
        
        </>
    )
}


export default Salaries