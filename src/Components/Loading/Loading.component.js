import React from 'react';
import './Loading.styles.scss';

const LoadingSpinner = () => {
  return <div className="load-spinner">{Array(10).fill(<div></div>)}</div>;
};
export default LoadingSpinner;
