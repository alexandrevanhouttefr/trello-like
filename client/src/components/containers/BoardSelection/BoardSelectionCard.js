import React from 'react';

const CreateBoard = function(props) {
    return (
        <div className="create-board-wrapper" onClick={ () => createNewBoard() }>
            <h3>Create</h3>
        </div>
    );
};