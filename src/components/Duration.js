import React from 'react'

const Duration = ({onDurationChanged}) => {

    const handleChange = function (event) {
        
        const newDuration = event.target.value
        onDurationChanged(newDuration)
    }


    return (
        <>
        <label for='duration'>Desired Duration</label>
        <input type='number' id='duration' onChange={handleChange}></input>
        </>
    )
}



export default Duration