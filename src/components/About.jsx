import React, { Component } from 'react'
import { HOC } from './HOC'

class About extends Component {
    render() {
        return (
            <h2 className='p-2 bg-primary' id="about">About</h2>
        )
    }
}
export default HOC(About)