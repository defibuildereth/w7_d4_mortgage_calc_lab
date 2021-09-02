import React from 'react'

const ResultsBox = ({salaries, deposit, duration, interest}) => {

    const buyingPower = Number(salaries*3)

    const monthlyInterest = Number(interest/100/12)

    const numberOfMonths = Number(duration*12)

    const monthlyRepayment = (Number(buyingPower*(monthlyInterest*(1+monthlyInterest)**numberOfMonths)/((1+monthlyInterest)**numberOfMonths-1))).toFixed(2)

    return (
        <div className='resultsBox'>
            <h4>I'm the Mortgage offer</h4>
            <p>The combined salary is: £{salaries}</p>
            <p>Buying power is: £{buyingPower}</p>
            <p>Max House Price: £{buyingPower+Number(deposit)}</p>
            <p>For your desired duration of: {duration} years..</p>
            <p>The yearly interest rate is: {interest}</p>
            <p>The monthly repayment would be: £{monthlyRepayment}</p>
            <p>The total you repay is: £{(monthlyRepayment*numberOfMonths).toFixed(2)}</p>
        </div>
    )
}



export default ResultsBox