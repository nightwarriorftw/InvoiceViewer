import React, { PureComponent } from "react";

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
        <div className="company-info">
          <p>{data.name}</p>
          <p>{data.address}</p>
          <p>{data.email}</p>
          <p>{data.mobile}</p>
        </div>
      </div>
    );
  }
}
export default Header;
