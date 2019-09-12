import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Employee(props) {
  return (
    <div>
      <h2>Employee</h2>
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}
Employee.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Employee;