import React from 'react';
import PropTypes from 'prop-types';

// import Img from '../assets/images/grey.png';

const LandingCard = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={props.image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href={props.btnUrl} className={props.btnClassName}>{props.btnName}</a>
                </div>
            </div>
        </div>
    );
};

LandingCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnUrl: PropTypes.string,
    btnClassName: PropTypes.string,
    btnName: PropTypes.string
  }; 

export default LandingCard;