import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {

    renderUser = (user) => {
        return (
            <li key={ user.id }>
                { user.name }
            </li>
        );
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                <h2>List of users</h2>
                { users && <ul> { users.map(this.renderUser) } </ul> }
            </div>
        )
  }
}

const mapStateToProps = (state) => ({
    users : state.users
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList); 
