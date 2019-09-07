import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import FilterableKegTable from './FilterableKegTable';

function App() {
    var appBackground = {
        backgroundColor: "#4B4E6D"
    }
    return (
        <div style={appBackground}>
            <Header />
            <Switch>
                <Route exact path='/' component={FilterableKegTable} />
            </Switch>
        </div>
    );
}

export default App;