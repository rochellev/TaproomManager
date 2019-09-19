import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Employee from './Employee';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    var appBackground = {
      backgroundColor: '#95A3B3',
    };
    return (
      <div style={appBackground}>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.props.masterKegList} />} />
          <Route path='/newkeg' render={() => <NewKegForm />} />
          <Route path='/employee' render={(props) => <Employee currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList      
  };
};

export default withRouter(connect(mapStateToProps)(App));