import React from 'react'

const ResultsBox = ({salaries, deposit}) => {



    return (
        <>
        <h4>I'm the Mortgage offer</h4>
        <p>{Number(salaries*3)+Number(deposit)}</p>
        </>
    )
}



export default ResultsBox