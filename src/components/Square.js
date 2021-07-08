import React from 'react'

const Square = ({ value,onClick,iswinning }) => {
    return (  
        <button type="button" className={`square ${iswinning?'winning':''} ${value==='X'?'text-green':'text-orange'}` } onClick={onClick} >{value}</button>
    )
}

export default Square
