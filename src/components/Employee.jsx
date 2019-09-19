import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegEditForm from './KegEditForm';
import {connect} from 'react-redux';

function Employee(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg.length > 0) {
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
  selectedKeg: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedKeg: state.selectedKeg,
    kegList: state.masterKegList
  };
};

export default connect(mapStateToProps)(Employee);