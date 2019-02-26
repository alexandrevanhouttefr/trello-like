import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import createNewBoard from "../../../../actions/CreateNewBoard";

import '../../../../styles/CreateBoard.css';

const CreateBoard = function({createNewBoard}) {
    return (
        <div className="create-board-wrapper" onClick={ () => createNewBoard() }>
           <h3>Create a group</h3>
        </div>
    );
};

CreateBoard.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
};

export default connect(null, { createNewBoard })(CreateBoard);