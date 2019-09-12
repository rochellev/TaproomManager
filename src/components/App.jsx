import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
// import FilterableKegTable from './FilterableKegTable';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Employee from './Employee';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleChangingSelectedKeg(keg){
    this.setState({selectedKeg: keg});
    alert('The selected keg is now: ' + this.state.selectedKeg.name);
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
          <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/employee' render={(props)=> <Employee kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;