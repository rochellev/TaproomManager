import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegEditForm from './KegEditForm';

function Employee(props) {
  let optionalSelectedKegContent = null;
  if(props.selectedKeg != null){
    optionalSelectedKegContent = <KegEditForm />;
  }

  return (
    <div>
      <h1>Employee Page</h1>
      {optionalSelectedKegContent}
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} onKegSelection={props.onKegSelection} />
    </div>
  );
}
Employee.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object
};

export default Employee;