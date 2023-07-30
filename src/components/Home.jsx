import React, { useEffect } from 'react'
import { HOC } from './HOC'

function Home(props) {
    useEffect(() => {
         console.log(props.reference) 
    })

    return (
        <div>

            <h2 className='p-2 bg-primary' id="home">Home</h2>
        </div>
    )
}

export default HOC(Home)
