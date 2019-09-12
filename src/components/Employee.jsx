import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegEditForm from './KegEditForm';

function Employee(props) {
  return (
    <div>
      <h1>Employee Page</h1>
      <KegEditForm />
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}
Employee.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Employee;