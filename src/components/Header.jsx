import React from 'react'
import logo from './logo.png'

export default function Header() {
    return (
        <div className="header">
            <div>
                <img width="100" height="100" src={logo} />
            </div>
            <div>
                <h2 style={{ margin: '5px' }}><b>TabEnv</b></h2>
            </div>
        </div>
    )
}
