import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import FilterableKegTable from './FilterableKegTable';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={FilterableKegTable} />
            </Switch>
        </div>
    );
}

export default App;