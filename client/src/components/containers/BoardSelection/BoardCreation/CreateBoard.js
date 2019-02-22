import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import '../../Style/CreateBoard.css';
import createNewBoard from "../../../actions/CreateNewBoard";

const CreateBoard = function({createNewBoard}) {
    return (
        <div className="create-board-wrapper" onClick={ () => createNewBoard() }>
           <h3>Create</h3>
        </div>
    );
};

CreateBoard.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
};

export default connect(null, { createNewBoard })(CreateBoard);