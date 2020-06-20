import React, { PureComponent } from 'react'

export default class Header extends PureComponent {

    render() {
        if(this.props.pending){
            return (<h2>Loading...</h2>)
        }
        console.log(this.props.info);
        return (
            <div className='header'>
                <img src={process.env.PUBLIC_URL + "img/logo.png"} alt='logo' width="50px" height="50px" />
                <div className='company-info'>
                    <p>Company </p>
                    <p>1065 Madan Road, Columnia MO, Missouri. (123)-65202</p>
                </div>
            </div>
        )
    }
}
