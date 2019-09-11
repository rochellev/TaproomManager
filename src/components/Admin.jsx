import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props) {
  return (
    <div>
      <h2>Admin</h2>
      <KegList kegList={props.kegList} />
    </div>
  );
}
Admin.propTypes = {
  kegList: PropTypes.array
};

export default Admin;