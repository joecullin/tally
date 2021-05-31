import './assets/css/App.css';
import React from "react";
import Header from "./components/Header";
import TallyInput from "./components/TallyInput";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
var cloneDeep = require('lodash.clonedeep');


function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

function App() {

    const [data, setData] = useStickyState({
        id: "default",
        displayName: "Tally Something!",
        tallies: [{
            id: "generic",
            label: "Count event!",
            lastEvent: null,
        }],
        allData: [{
            id: "generic",
            events: [],
        }],
    }, "tallyData");

    const recordTally = (tallyId) => {
        console.log(`recordTally for '${tallyId}'`);
        const newData = cloneDeep(data);
        const tally = newData.tallies.find(tally => tally.id === tallyId);
        const tallyEvents = newData.allData.find(eventData => eventData.id === tallyId);
        if (tally && tallyEvents){
            const now = (new Date()).toISOString();
            tally.lastEvent = now;
            tallyEvents.events.push(now);
            setData(newData);
        }
    };

    return (
        <Router>
            <div className="App">
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
                <Header/>
                <Switch>
                    {/* <Route path="/review">
                        <TallyReview />
                    </Route> */}
                    <Route path="/">
                        <TallyInput
                            tallies={data.tallies ? data.tallies : []}
                            recordTally={(id) => recordTally(id)}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
