import React from 'react'
import Salaries from './Salaries'
import Deposit from './Deposit'
import Duration from './Duration'
import Interest from './Interest'


const MortgageForm = ({onSalaryChanged, onDepositChanged, onDurationChanged, onInterestChanged}) => {


    return (
        <fieldset className='mortgageForm'>
        <legend className='legend'>Mortgage Form</legend>
        <Salaries onSalaryChanged={onSalaryChanged}/>
        <Deposit onDepositChanged={onDepositChanged}/>
        <Duration onDurationChanged={onDurationChanged}/>
        <Interest onInterestChanged={onInterestChanged}/>
        </fieldset>
    )
}


export default MortgageForm