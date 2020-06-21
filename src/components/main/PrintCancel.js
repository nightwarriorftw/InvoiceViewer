import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';
import Modal from 'react-modal';
// import { changeFontHandler } from '../../actions/info';


Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

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
        this.setState({
            ...this.state,
            show: true,
        })
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            fontSize: e.target.value
        });
    }

    closeModal = () => {
        this.setState({
            ...this.state,
            show: false,
        })
    }

    print = (e) => {
        console.log(this.state.fontSize);
        this.closeModal();
        // return changeFontHandler(this.state.fontSize);
        console.log(this.state.fontSize);
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
                <div className='print' id='modal'>
                    <button className='btn btn-info' onClick={this.handleSubmit}>Print</button>
                    <button className='btn btn-cancel'>Cancel</button>
                    <Modal
                        isOpen={this.state.show}
                        style={customStyles}
                    >
                        <label>
                            Enter custom font size
                        </label>
                        <input type='text' className='form-class' placeholder='9px' onChange={this.onChange} /><br />
                        <button className='btn btn-success' style={{ margin: '20px' }} onClick={this.print}>Continue</button>
                        <button onClick={this.closeModal} className='btn btn-danger'>Close</button>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.info.isFetching,
});

export default connect(mapStateToProps)(PrintCancel);
