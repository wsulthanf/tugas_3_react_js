import React from 'react'

export default function topevents() {
    const handleFooter = (e, value) => {
        e.preventDefault();
        alert(value);
    }
    return (
        <div>
            <a href="/" onClick={ e => {handleFooter(e,"Back to Home")}} >Back to Home</a>
        </div>
    )
}
