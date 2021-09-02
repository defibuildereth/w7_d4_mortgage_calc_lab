import React from 'react'
import Salaries from './Salaries'
import Deposit from './Deposit'


const MortgageForm = ({onSalaryChanged, onDepositChanged}) => {


    return (
        <>
        <h4> I'm the Form</h4>
        <Salaries onSalaryChanged={onSalaryChanged}/>
        <Deposit onDepositChanged={onDepositChanged}/>
        </>
    )
}


export default MortgageForm