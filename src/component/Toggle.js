import React, {useState} from 'react'
import './Toggle.css'
function Toggle() {
    const [toggle , setToggle]  = useState(false);
    return (
        <>
        <div className="toggle">
            <div className="toggle__heading">
                <h3>Hello</h3>
                <h3>Hello Hello</h3>
                <h3>Hello Hello Hello</h3>
                <h3>Hello Hello Hello Hello</h3>
            </div>
            <div className="toggle__contaner">
            <div className="card" style={{width: "18rem"}} className={toggle ? "fullSize" : "halfSize"}></div>
            </div>
            <button onClick={() => setToggle(!toggle)}>Press</button>
        </div>
        </>
    )
}

export default Toggle
