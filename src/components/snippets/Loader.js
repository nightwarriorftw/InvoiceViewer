import React from 'react'
import ReactLoading from 'react-loading';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '250px'
}

function Loader(props) {
    return (
        <div>
            <div style={style}>
                <ReactLoading type='spin' color='white'/>
            </div>
        </div>
    )
}

Loader.propTypes = {

}

export default Loader

