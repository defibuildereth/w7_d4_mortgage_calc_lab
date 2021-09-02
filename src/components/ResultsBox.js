import React from 'react'

const ResultsBox = ({salaries, deposit, duration}) => {

    const buyingPower = Number(salaries*3)

    return (
        <>
        <h4>I'm the Mortgage offer</h4>
        <p>The combined salary is: £{salaries}</p>
        <p>Buying power is: £{buyingPower}</p>
        <p>Max House Price: £{buyingPower+Number(deposit)}</p>
        <p>For your desired duration of: {duration} years..</p>
        <p>The monthly repayment would be: £{buyingPower/(duration*12)}</p>
        </>
    )
}



export default ResultsBox