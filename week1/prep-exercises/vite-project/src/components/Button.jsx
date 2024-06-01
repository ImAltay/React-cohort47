import PropTypes from 'prop-types';

const Button = ({ countFunction, countText }) => {
    return <button onClick={countFunction}> {countText} </button>;
}
Button.propTypes = {
    countFunction: PropTypes.func.isRequired,
    countText: PropTypes.string.isRequired,
};

export default Button;