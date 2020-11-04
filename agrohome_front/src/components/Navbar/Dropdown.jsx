import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './Dropdown.css'
import {Categories} from './MenuItem'

function Dropdown() {
    const [click, setClick] = useState(false)
    
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div>
            <ul onClick={handleClick} className={click ? "categories-menu clicked" : "categories-menu"}>
                {Categories.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <Link exact to={item.path} className={item.className} onClick={() => setClick(false)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown