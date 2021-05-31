import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDisplay from "./EventDisplay";

const TallyView = ({tallyConfigs, tallyData}) => {

    const displayEvents = (data) => {
        let display = [];
        if (data && data.events){
            let thisDate;
            let prevDate;
            for (let i=data.events.length-1; i>=0; i--){
                const event = data.events[i];

                // add a divider line between days
                let borderTop = "none";
                thisDate = new Date(event);
                if (prevDate && (
                    prevDate.getFullYear() !== thisDate.getFullYear() ||
                    prevDate.getMonth() !== thisDate.getMonth() ||
                    prevDate.getHours() !== thisDate.getHours() ||
                    prevDate.getDate() !== thisDate.getDate()))
                {
                    borderTop = "solid 1px gray"
                }

                display.push(
                    <Col key={i} xs="12" style={{paddingLeft: "3em"}}>
                        <EventDisplay style={{borderTop}} event={event}/>
                    </Col>
                );
                prevDate = thisDate;
            }
        }
        return display;
    };

    return (
        <div className="text-left">
            {tallyConfigs.map(config => {
                return (
                    <Row key={config.id}>
                        <Col key={config.id} xs="12" style={{padding: "1em", paddingLeft: "2em", fontWeight: "bold"}}>
                            {config.label}
                        </Col>
                        {displayEvents(tallyData.find(data => data.id === config.id))}
                    </Row>
                );
            })}
        </div>
    );
};
  
export default TallyView;