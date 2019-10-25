import React from 'react';
import { connect } from 'react-redux'
import { startFileUpload } from './fileUploadActionCreators';

const FileUploader = (props) => {
    let { status, credentials, file, startFileUpload } = props;
    return (
        <div>
            Status: {status}
            <br></br>
            File: {file}
            <br></br>
            Credentials: {credentials}
            <br></br>
            <button onClick={() => {
                startFileUpload(Math.random());
            }}>uploadFile</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        status: state.fileUploader.status,
        file: state.fileUploader.file,
        credentials: state.fileUploader.credentials
    }
};

const mapDispatchToProps = { startFileUpload };

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);