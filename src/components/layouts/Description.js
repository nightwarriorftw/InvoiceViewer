import React, { PureComponent } from 'react'

export default class Description extends PureComponent {

    render() {
        const orderItems = this.props.info.order_items || [];
        return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <table className='table inventory'>
                            <thead>
                                <hr/>
                                <tr className='client-info'>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Quantity</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Total</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                    </div>
                </div>
        )
    }
}
