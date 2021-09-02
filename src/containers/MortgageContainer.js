import React, {useState, useEffect} from 'react'
import MortgageForm from '../components/MortgageForm'
import ResultsBox from '../components/ResultsBox'

const MortgageContainer = ({}) => {

    const [salaries, setSalaries] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [duration, setDuration] = useState(0)
    const [interest, setInterest] = useState(0)

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

    return (
        <>
        <h2>Hey I'm the Mortgage Container</h2>
        <MortgageForm onSalaryChanged={onSalaryChanged} onDepositChanged={onDepositChanged} onDurationChanged={onDurationChanged} onInterestChanged={onInterestChanged}/>
        <ResultsBox salaries={salaries} deposit={deposit} duration={duration} interest={interest}/>
        
        </>
    )
}



export default MortgageContainer