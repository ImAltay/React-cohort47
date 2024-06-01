import propTypes from 'prop-types';

const Value = ({ value, setValue }) => {
  return (
    <div>
      <label htmlFor='value'>Value (1-5) </label>
      <input 
        type='number'
        id='value'
        name='value'
        min='1'
        max='5'
        value={value}
        onChange={(e) => {
          const num = parseInt(e.target.value);
          if (!isNaN(num) && num >= 1 && num <= 5) {
            setValue(num);
          }
        }}></input>
    </div>
  );
};

Value.propTypes = {
  value: propTypes.number.isRequired,
  setValue: propTypes.func.isRequired,
};

export default Value;
