import React from 'react'
import Salaries from './Salaries'


const MortgageForm = ({onSalaryChanged}) => {


    return (
        <>
        <h4> I'm the Form</h4>
        <Salaries onSalaryChanged={onSalaryChanged}/>
        </>
    )
}


export default MortgageForm