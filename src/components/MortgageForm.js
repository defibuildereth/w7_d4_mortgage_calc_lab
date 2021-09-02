import React from 'react'
import Salaries from './Salaries'
import Deposit from './Deposit'
import Duration from './Duration'
import Interest from './Interest'


const MortgageForm = ({onSalaryChanged, onDepositChanged, onDurationChanged, onInterestChanged}) => {


    return (
        <div className='mortgageForm'>
        <h4> I'm the Form</h4>
        <Salaries onSalaryChanged={onSalaryChanged}/>
        <Deposit onDepositChanged={onDepositChanged}/>
        <Duration onDurationChanged={onDurationChanged}/>
        <Interest onInterestChanged={onInterestChanged}/>
        </div>
    )
}


export default MortgageForm