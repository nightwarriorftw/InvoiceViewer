import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/info";

import Info from "../layouts/Info";
import Header from "../layouts/Header";
import Terms from '../layouts/Terms';
import Description from "../layouts/Description";
import Loader from "../snippets/Loader";


const container = {
  margin: '30px'
}
const main = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
}

class SubMain extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { info, isFetching, error, } = this.props;
    if (isFetching) {
      return <Loader />;
    }
    if (error) {
      return <div>Error: {error} </div>;
    }
    return (
      <div>
        <div style={container}>
          <div style={main}>
            <Header info={info} />
            <br />
            <Info info={info} />
            <Description info={info} />
            <Terms />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.info.info,
  isFetching: state.info.isFetching,
  error: state.info.error,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubMain);
