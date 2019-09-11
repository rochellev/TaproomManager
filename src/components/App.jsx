import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
// import FilterableKegTable from './FilterableKegTable';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Admin from './Admin';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
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
          <Route path='/admin' render={(props)=> <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;