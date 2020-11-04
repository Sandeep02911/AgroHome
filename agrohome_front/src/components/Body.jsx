import "./Body.css"
import React from 'react'

const Body = ({title="Title", children}) => {
    return (
        <div className="body-wrapper">
            <div className="nav-overlay"></div>
            <div className="body-container">
                {children}
            </div>
        </div>
    )
}

export default Body
