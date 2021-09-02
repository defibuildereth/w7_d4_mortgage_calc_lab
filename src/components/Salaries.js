import React from 'react'


const Salaries = ({onSalaryChanged}) => {

    const handleChange = function(event) {
        const newSalary = event.target.value
        onSalaryChanged(newSalary)
        // console.log(`changed the salary to ${newSalary}`)
    }

    return (
        <>
        <label for='salary'>Input Salary Here: </label>
        <input type='number' id='salary' onChange={handleChange}></input>
        </>
    )
}


export default Salaries