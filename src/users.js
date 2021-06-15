import React from 'react';
import { connect } from 'react-redux';
import updateName from './store/action';

class Users extends React.Component {
    constructor() {
        super();
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
    }

    nameChangeHandler({ target }) {
        this.props.updateName(target.value);
    }

    render() {
        return (<>
            <label>Name:</label> &nbsp;
            <input type="text" onChange={this.nameChangeHandler} />
            <p>Name from global state: {this.props.name}</p>
        </>);
    }
}

const mapStateToProps = state => ({
    name: state.name,
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(updateName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
