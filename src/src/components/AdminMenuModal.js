import React from 'react';
import PropTypes from 'prop-types';
import AdminMenu from './AdminMenu';

import './MenuModal.css';

export default class AdminMenuModal extends React.Component {
  render() {
    // renders nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    
    return (
        <div className="modal">
            <AdminMenu 
                onClose={this.props.onClose}
            />
        </div>
    )
  }
}

AdminMenuModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
