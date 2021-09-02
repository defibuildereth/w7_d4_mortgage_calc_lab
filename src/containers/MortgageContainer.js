import React, {useState, useEffect} from 'react'
import MortgageForm from '../components/MortgageForm'
import ResultsBox from '../components/ResultsBox'

const MortgageContainer = ({}) => {

    const [salaries, setSalaries] = useState('')
    const [deposit, setDeposit] = useState('')
    const [duration, setDuration] = useState('')
    const [interest, setInterest] = useState('')

    const onSalaryChanged = function (salary) {
        setSalaries(salary)
        // console.log(`new total salaries is ${salaries}`)
    }

    const onDepositChanged = function (deposit) {
        setDeposit(deposit)
        // console.log(`the new deposit is ${deposit}`)
    }

    const onDurationChanged = function (duration) {
        setDuration(duration)
        console.log(`the new duration is ${duration}`)

    }

    const onInterestChanged = function (interest) {
        setInterest(interest)
        console.log(`the new interest rate is ${interest}`)
    }

    useEffect(() => {
        onDurationChanged(0);
        onInterestChanged(0);
        onDepositChanged(0);
        onSalaryChanged(0);
    }, [])

    return (
        <div className='mortgageContainer'>
        
        <MortgageForm onSalaryChanged={onSalaryChanged} onDepositChanged={onDepositChanged} onDurationChanged={onDurationChanged} onInterestChanged={onInterestChanged}/>
        <ResultsBox salaries={salaries} deposit={deposit} duration={duration} interest={interest}/>
        
        </div>
    )
}



export default MortgageContainer