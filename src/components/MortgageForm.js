import React from 'react'
import Salaries from './Salaries'
import Deposit from './Deposit'
import Duration from './Duration'


const MortgageForm = ({onSalaryChanged, onDepositChanged, onDurationChanged}) => {


    return (
        <>
        <h4> I'm the Form</h4>
        <Salaries onSalaryChanged={onSalaryChanged}/>
        <Deposit onDepositChanged={onDepositChanged}/>
        <Duration onDurationChanged={onDurationChanged}/>
        </>
    )
}


export default MortgageForm