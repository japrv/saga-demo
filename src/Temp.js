import React from 'react';
import { connect } from 'react-redux'
import { addAction1, addAction2, addAction3 } from './actionCreators';

const Temp = ({ temp, addAction1, addAction2, addAction3 }) => {
    return (
        <div>
            State: {temp.test}
            <br></br>
            <button onClick={addAction1}>addAction1</button>
            <button onClick={addAction2}>addAction2</button>
            <button onClick={addAction3}>addAction3</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        temp: state.test
    }
};

const mapDispatchToProps = { addAction1, addAction2, addAction3 };

export default connect(mapStateToProps, mapDispatchToProps)(Temp);