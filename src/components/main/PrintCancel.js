import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';
import { Button, Modal } from 'react-bootstrap';


class PrintCancel extends PureComponent {
    state = {
        fontSize: '9px',
        show: false,

    }

    downloadPDF = async (pdf) => {
        const downloadPDF = 'http://ec2-13-127-117-101.ap-south-1.compute.amazonaws.com:8080/api/invoice/pdf/' + pdf;
        await Axios.get(
            downloadPDF
        ).then(res => {
            if (res.status === 200) {
                window.location.href = downloadPDF;
            }

        }).catch(err => console.log(err));
    }

    getLink = async (htmlString) => {
        await Axios.post(
            'http://ec2-13-127-117-101.ap-south-1.compute.amazonaws.com:8080/api/invoice/pdf/generate',
            {
                'html': htmlString
            }

        )
            .then(res => {
                this.setState({ filename: res.data.data.filename });
                console.log(res.status);
                console.log(res.data.data.filename)
                this.downloadPDF(res.data.data.filename);
            })
            .catch(err => console.log(err));
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const htmlString = document.getElementById('SubMain').innerHTML;
        this.getLink(htmlString);
    }

    render() {
        const { isFetching } = this.props;
        if (isFetching) {
            return <div></div>
        }
        return (
            <div>
                <div className='print'>
                    <button className='btn btn-info' onClick={this.handleSubmit}>Print</button>
                    <button className='btn btn-cancel'>Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.info.isFetching,
});

export default connect(mapStateToProps)(PrintCancel);
