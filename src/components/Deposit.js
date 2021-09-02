import React from 'react'

const Deposit = ({onDepositChanged}) => {

    const handleChange = function (event) {
        const newDeposit =event.target.value
        console.log(newDeposit)
        onDepositChanged(newDeposit)
    }


    return (
        <>
        <label for='deposit'>Enter your deposit</label>
        <input type='number' id='deposit' onChange={handleChange}></input>
        </>
    )
}



export default Deposit