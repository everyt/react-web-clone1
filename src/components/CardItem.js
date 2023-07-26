import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardItem({ src, text, label, path }) {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic-wrap" data-catgory={label}>
          <img src={src} alt="Travel" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

CardItem.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardItem;
