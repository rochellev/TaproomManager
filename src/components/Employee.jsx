import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegEditForm from './KegEditForm';

function Employee(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null) {
    optionalSelectedKegContent = <KegEditForm selectedKeg={props.kegList[props.selectedKeg]} />;
  }

  return (
    <div>
      <h1>Employee Page</h1>
      <div class='d-flex flex-column-reverse'>
        <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} onKegSelection={props.onKegSelection} />
      </div>
      <div>
        {optionalSelectedKegContent}
      </div>

    </div>
  );
}
Employee.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object
};

export default Employee;