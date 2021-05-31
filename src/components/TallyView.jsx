import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";

const TallyView = ({tallies, recordTally}) => {
    return (
        <Row className="text-left">
        {tallies.map(tally => {
            return (
                <Col key={tally.id} xs="12" style={{padding: "2em"}}>
                    <div>
                        <Button
                            onClick={() => recordTally(tally.id)}
                        >
                            {tally.label}
                        </Button>
                        {tally.lastEvent &&
                            <span style={{paddingLeft: "1em", fontStyle: "italic"}}>
                                {"last: " + moment(tally.lastEvent).fromNow()}
                            </span>
                        }
                    </div>
                </Col>
            );
        })}
        </Row>
    );
};
  
export default TallyView;