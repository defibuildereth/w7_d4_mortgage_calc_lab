import React from 'react'

const Interest = ({onInterestChanged}) => {

    const handleChange = function (event) {
        
        const newInterest = event.target.value
        onInterestChanged(newInterest)
    }


    return (
        <>
        <label for='interest'>Interest Rate</label>
        <input type='number' id='interest' onChange={handleChange}></input>
        </>
    )
}



export default Interest