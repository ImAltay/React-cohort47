import propTypes from 'prop-types';

function Person({ person }) {
  if (person == null) {
    return null;
  }
  return (
    <ul>
      <li>
        First name is: <strong> {person.first_name}</strong>
      </li>
      <li>
        Last name is: <strong> {person.last_name}</strong>
      </li>
      <li>
        Email address is: <strong> {person.email}</strong>
      </li>
    </ul>
  );
}

Person.propTypes = {
  person: propTypes.object,
};

export default Person;
