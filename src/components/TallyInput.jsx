import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment";

const TallyInput = ({tallyConfigs, recordTally}) => {
    return (
        <Row>
        {tallyConfigs.map(config => {
            return (
                <Col key={config.id} xs="12" style={{padding: "2em"}}>
                    <div>
                        <Button
                            onClick={() => recordTally(config.id)}
                        >
                            {config.buttonLabel}
                        </Button>
                        {config.lastEvent &&
                            <span style={{paddingLeft: "1em", fontStyle: "italic"}}>
                                {"last: " + moment(config.lastEvent).fromNow()}
                            </span>
                        }
                    </div>
                </Col>
            );
        })}
        </Row>
    );
};
  
export default TallyInput;