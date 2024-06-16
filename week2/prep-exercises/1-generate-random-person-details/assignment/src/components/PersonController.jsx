import { useEffect, useState } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const res = await fetch('https://randomuser.me/api?results=1');
    const data = await res.json();
    const newPerson = {
      first_name: data.results[0].name.first,
      last_name: data.results[0].name.last,
      email: data.results[0].email,
    };
    setPerson(newPerson);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;
