import React from 'react';
import PropTypes from 'prop-types';
import './File.css';

const sizeConverter = (size)=> {
  return size >= 1000000000 ?
    `${Math.round(size/10000000)/100}GB`: `${Math.round(size/10000)/100}MB`
};

const File = ({ created, desc, ext, name, size }) => (
  <article className="File">
    <h2 className="File-name">{ name }</h2>
    <dl className="File-details">
      <dt>Extension:</dt>
      <dd>{ext}</dd>
      <dt>Size:</dt>
      <dd>{sizeConverter(size)}</dd>
      <dt>Created:</dt>
      <dd>{new Date(created).toDateString()}</dd>
    </dl>
    <p>{desc}</p>
  </article>
);

File.propTypes = {
  created: PropTypes.string,
  desc: PropTypes.string,
  ext: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

export default File;
