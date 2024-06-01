import PropTypes from 'prop-types';

const Count = ({ count }) => {
    // document.body.style.background = `linear-gradient(to top, #00b3ff ${count*10}%, #333 ${count*10}%)`;
  return (
    <div>
        <div id='glass' style={{background: `linear-gradient(to top, #00b3ff ${count*10}%, #333 ${count*10}%)`}} > </div>
        <p><span>{count}</span>L</p></div>
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Count;
