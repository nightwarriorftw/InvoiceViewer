import React from 'react'
import { getTotal } from '../Calc/CalcTotal';

const totalStyle = {
  display: 'flex',
  float: 'right',
  marginTop: '-40px'
}

const clientInfo = {
    fontFamily: 'Courier New',
    color: '#696969',
    fontSize: '10px'
}

export default function Total(props) {
    const orderItems = props.orderItems || {}
    const currency = props.orderItems.currency || '$';
    const totalAmount = getTotal(orderItems);
    const taxes = totalAmount * (0.10);
    const discount = totalAmount * (0.05);
    const total = totalAmount + taxes - discount;
    return (
        <div>
            <div style={totalStyle}>
                <div style={clientInfo}>
                    <p><strong>Sub Total: </strong>{currency}{totalAmount}</p>
                    <p><strong>Taxes(10%): </strong>{currency}{taxes}</p>
                    <p><strong>Discount(5%): </strong>{currency}{discount}</p>
                    <p style={{color: '#00BFFF', fontSize: '11px'}}><strong>Total: </strong>{currency}{total}</p>
                </div>
            </div>
        </div>
    )
}
