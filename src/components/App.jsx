import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import FilterableKegTable from './FilterableKegTable';
import NewKegControl from './NewKegControl';


function App() {
    var appBackground = {
        backgroundColor: '#95A3B3',
    };
    return (
        <div style={appBackground}>
            <Header />
            <Switch>
                <Route exact path='/' component={FilterableKegTable} />
                < Route path='/newkeg' component={NewKegControl} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;