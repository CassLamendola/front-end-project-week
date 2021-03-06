import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const NoteButton = (props) => {
    return (
        props.link ? (
            <Link to={props.link}>
                <button 
                    className={`btn ${props.color}`} onClick={props.onClick}>{props.value}
                </button>
            </Link>
        ) : (
            <button 
                className={`btn ${props.color}`} onClick={props.onClick}>{props.value}
            </button>
        )
    )
}
 
export default withRouter(NoteButton);