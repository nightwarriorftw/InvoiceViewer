import React from 'react'

const clientInfo = {
    fontFamily: 'Courier New',
    color: '#696969',
    fontSize: '9px'
}

const nameStyle = {
    fontSize: '10px',
}

function TableStripe(props) {
    return (

        <tr>
            <td>
                <strong style={nameStyle}>{props.name}</strong>
                <p style={clientInfo}>{props.description}</p>
            </td>
            <td style={clientInfo}>{props.quantity}</td>
            <td style={clientInfo}>{props.currency}{props.amount}</td>
            <td style={clientInfo}>{props.currency}{props.total}</td>
        </tr>

    )
}
export default TableStripe

