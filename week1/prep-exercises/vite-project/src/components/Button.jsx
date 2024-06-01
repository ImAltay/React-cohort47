import PropTypes from 'prop-types';

const Button = ({ countFunction, countText }) => {
    return <button onClick={countFunction}> {countText} </button>;
}


// Eslint and ChatGPT insisted I add this. I don't know what this part exactly does yet :) program should still work without it.
Button.propTypes = {
    countFunction: PropTypes.func.isRequired,
    countText: PropTypes.string.isRequired,
};

export default Button;