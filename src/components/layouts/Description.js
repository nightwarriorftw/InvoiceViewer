import React, { PureComponent } from 'react'
import TableStripe from '../snippets/TableStripe';
import Total from './Total';

const boxTotal = {
    backgroundColor: '#E8E8E8',
    padding: '50px',
    borderRadius: '5px'
}

const clientInfo = {
    fontFamily: 'Courier New',
    color: '#696969',
    fontSize: '9px'
}

export default class Description extends PureComponent {

    render() {
        const orderItems = this.props.info.order_items || [];
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <table className='table inventory'>
                            <thead>
                                <tr style={clientInfo}>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Quantity</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderItems.map(order => (
                                        <TableStripe
                                            key={order.name + Math.random()}
                                            name={order.name}
                                            description={order.description}
                                            quantity={order.quantity}
                                            amount={order.amount}
                                            currency={order.currency}
                                            total={order.total}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-12'>
                        <div style={boxTotal}>
                            <Total orderItems={orderItems} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
