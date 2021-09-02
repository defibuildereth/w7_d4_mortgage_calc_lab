import React, {useState, useEffect} from 'react'
import MortgageForm from '../components/MortgageForm'
import ResultsBox from '../components/ResultsBox'

const MortgageContainer = ({}) => {



    return (
        <>
        <h2>Hey I'm the Mortgage Container</h2>
        <MortgageForm />
        <ResultsBox/>
        
        </>
    )
}



export default MortgageContainer