import React from 'react';
import PropTypes from 'prop-types';
import UserMenu from './UserMenu';

import './MenuModal.css';

export default class UserMenuModal extends React.Component {
    render() {
        // renders nothing if the "show" prop is false
        if(!this.props.show) {
        return null;
    }
    
    return (
        <div className="menu_modal">
            <UserMenu 
                onClose={this.props.onClose}
            />
        </div>
    )
  }
}

UserMenuModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};