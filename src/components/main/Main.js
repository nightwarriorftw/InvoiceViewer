import React, { PureComponent } from "react";

import Info from "../layouts/Info";
import Header from "../layouts/Header";

import { connect } from "react-redux";
import Loader from "../snippets/Loader";
import { fetchProducts } from "../../actions/info";
import Description from "../layouts/Description";

class Main extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { info, isFetching, error } = this.props;
    if (isFetching) {
      return <Loader />;
    }
    if (error) {
      return <div>Error: {error} </div>;
    }
    return (
      <div className="container">
        <div className="main">
          <Header info={info}/>
          <br/>
          <Info info={info}/>
          <Description />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
