import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

import Info from '../layouts/Info';
import Header from '../layouts/Header';

import { fetchProducts } from '../../actions/info';
import Loader from '../snippets/Loader';

class Main extends PureComponent {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { info, isFetching, error } = this.props;

        if (isFetching) {
            return (
                <Loader />
            )

        }
        return (
            <div className='container'>
                <div className='main'>
                    <Header info={info} error={error} pending={isFetching} />
                    <Info />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info: state.info.info,
    isFetching: state.info.isFetching,
    error: state.info.error,
})

export default connect(mapStateToProps)(Main);
