import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Employee from './Employee';
import { v4 } from 'uuid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleChangingSelectedKeg(kegID){
    this.setState({selectedKeg: kegID});
  }

  render() {
    var appBackground = {
      backgroundColor: '#95A3B3',
    };
    return (
      <div style={appBackground}>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={() => <NewKegForm />} />
          <Route path='/employee' render={(props)=> <Employee kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;