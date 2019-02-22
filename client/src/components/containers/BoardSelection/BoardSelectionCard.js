import React from 'react';

const BoardSelectionCard = function(props) {
    return (
        <div className="board" key={props.id}>
            {props.title}
        </div>
    );
};

export default BoardSelectionCard;