import React from 'react';
import PropTypes from 'prop-types';

const Jumbo = (props) => {
    return (
        <div className="jumbotron my-4">
            <h1 className="display-3">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <a href={props.linkUrl} className={props.linkClass}>{props.linkName}</a>
        </div>
    );
};

Jumbo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    linkClass: PropTypes.string,
    linkName: PropTypes.string
}

export default Jumbo;