import React, { PureComponent } from 'react'

const termsInfo = {
    fontFamily: 'Courier New',
    color: '#696969',
    fontSize: '9px'
}

const termsHeading = {
  marginTop: '10px',
  fontSize: '14px',
}

export default class Terms extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <div style={termsHeading}>
                        <strong>Terms and Condition</strong>
                    </div>
                    <div style={termsInfo}>
                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    </div>
                </div>
            </div>
        )
    }
}
