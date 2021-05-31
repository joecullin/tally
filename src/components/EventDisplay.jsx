import React from "react";
// import moment from "moment";

const EventDisplay = ({event, style}) => {
    const dateDisplaySpec = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    return (
        <span style={{
            ...style,
            padding: ".25em .5em",
        }}>
            {(new Date(event)).toLocaleDateString(undefined, dateDisplaySpec)}
        </span>
    );
};
  
export default EventDisplay;