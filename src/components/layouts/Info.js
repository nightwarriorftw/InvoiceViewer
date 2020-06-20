import React, { PureComponent } from 'react'

export default class Info extends PureComponent {
    render() {
        const clientData = {
            name: '',
            address: '',
            mobile: '',
            email: '',
        }

        const orderData = {
            date: '',
            state: '',
            id: '',
            invoice_number: '',
            amount: '',
            currency: ''
        }

        const data = this.props.info.client || clientData;
        const order = this.props.info.order || orderData;
        return (
            <div>
                <div className='row info'>
                    <div className='col-3 col-md-4 col-sm-12' >
                        Client Information:
                        <div className='client-info'>
                            <br />
                            <p><strong style={{ color: 'black' }}>{data.name}</strong></p>
                            <p>{data.address}</p>
                            <p>{data.mobile}</p>
                            <p>{data.email}</p>
                        </div>
                    </div>
                    <div className='col-3 col-md-4 col-sm-12' >
                        Order Information
                        <div className='client-info'>
                            <br/>
                            <p><strong>Date: </strong>{order.date}</p>
                            <p><strong>Status: </strong>
                                <span style={{ backgroundColor: '#DAA520', padding: '2px', color: 'lightcyan' }}>{order.status}</span>
                            </p>
                            <p><strong>Id: </strong>{order.id}</p>
                        </div>
                    </div>
                    <div className='col-3 col-md-4 col-sm-12'>
                        Invoice Number {order.invoice}
                        <div className='client-info'>
                            <br/>
                            <div style={{color: '#00BFFF'}}>TOTAL DUE: {order.currency}{order.amount}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
