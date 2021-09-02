import React, {useState, useEffect} from 'react'
import MortgageForm from '../components/MortgageForm'
import ResultsBox from '../components/ResultsBox'

const MortgageContainer = ({}) => {

    const [salaries, setSalaries] = useState(0)

    const onSalaryChanged = function (salary) {
        setSalaries(salary)
        console.log(`new salary is ${salaries}`)
    }

    


    return (
        <>
        <h2>Hey I'm the Mortgage Container</h2>
        <MortgageForm onSalaryChanged={onSalaryChanged}/>
        <ResultsBox salaries={salaries}/>
        
        </>
    )
}



export default MortgageContainer