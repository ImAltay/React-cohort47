import PropTypes from 'prop-types';

const Count = ({count}) =>{
    return (
        <div> <p>Count <span>{count}</span> </p></div>
    )
}

Count.propTypes = {
    count: PropTypes.number.isRequired,
};


export default Count;