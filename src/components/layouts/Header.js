import React, { PureComponent } from "react";

const companyInfo = {
  fontFamily: 'Courier New',
  color: '#696969',
  fontSize: '9px'
}
class Header extends PureComponent {
  render() {
    const company = {
      name: '',
      address: '',
      email: '',
      mobile: '',
      logo: ''
    }
    const data = this.props.info.company || company;
    return (
      <div className="header">
        <img
          src={data.logo}
          alt="logo"
          width="50px"
          height="50px"
        />
        <div style={companyInfo}>
          <p style={{fontSize: this.props.size}}>{data.name}</p>
          <p>{data.address}</p>
          <p>{data.email}</p>
          <p>{data.mobile}</p>
        </div>
      </div>
    );
  }
}
export default Header;
