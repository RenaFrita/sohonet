import React from 'react';
import PropTypes from 'prop-types';
import { openUpload } from '../../actions/upload';
import './Menu.css';

const open = (dispatch) => {
  dispatch(openUpload());
};

const Menu = ({ dispatch }) => {
  return (
    <div onClick={() => open(dispatch)} className="Menu">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
)};

Menu.propTypes = {
  dispatch: PropTypes.func,
};

export default Menu;
