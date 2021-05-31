import '../assets/css/App.css';
import '../assets/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import TallyInput from "./TallyInput";
import TallyView from "./TallyView";
import {
    HashRouter as Router,
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

    const defaultConfigAndData = {
        id: "default",
        displayName: "Tally Something!",
        tallyConfigs: [{
            id: "default",
            label: "My Counter",
            buttonLabel: "Count event!",
            lastEvent: null,
        }],
        tallyData: [{
            id: "default",
            events: [],
        }],
    };

    const [data, setData] = useStickyState(defaultConfigAndData, "tallyData");

    const recordTally = (tallyId) => {
        console.log(`recordTally for '${tallyId}'`);
        const newData = cloneDeep(data);
        const tally = newData.tallyConfigs.find(tally => tally.id === tallyId);
        const tallyEvents = newData.tallyData.find(eventData => eventData.id === tallyId);
        if (tally && tallyEvents){
            const now = (new Date()).toISOString();
            tally.lastEvent = now;
            tallyEvents.events.push(now);
            setData(newData);
        }
    };

    return (
        <Router basename="/tally/">
            <div className="App text-left">
                <Header
                    brandText={data.displayName}
                />
                <Switch>
                    <Route path="/view">
                        <TallyView
                            tallyConfigs={data.tallyConfigs ? data.tallyConfigs : []}
                            tallyData={data.tallyData ? data.tallyData : []}
                         />
                    </Route>
                    <Route path="/">
                        <TallyInput
                            tallyConfigs={data.tallyConfigs ? data.tallyConfigs : []}
                            recordTally={(id) => recordTally(id)}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
