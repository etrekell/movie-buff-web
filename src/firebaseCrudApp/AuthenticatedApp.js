import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const AuthenticatedApp = () => {
  const [people, setPeople] = useState([]);
  const peopleCollectionRef = collection(db, 'people');

  useEffect(() => {
    // Use some sort of useAsync for these?
    const getPeople = async () => {
      const data = await getDocs(peopleCollectionRef);
      // Why this error?
      setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('data', data);
      console.log(people);
    };

    // Handle this promise
    getPeople();
    // Getting a warning saying to add people and peopleCollectionRef, but then it will run all the time, how do I only
    // run it on initial render? -> I think use a ref and return early
  }, []);

  const peopleEntryHandler = async (e) => {
    e.preventDefault();
    const { name, age } = e.target.elements;
    await addDoc(peopleCollectionRef, { name: name.value, age: Number(age.value) });
  };

  const ageIncreaseHandler = async (id, prevAge) => {
    const personDoc = doc(db, 'people', id);
    const newFields = { age: prevAge + 1 };
    await updateDoc(personDoc, newFields);
    console.log(prevAge);
  };

  const deletePersonHandler = async (id) => {
    const personDoc = doc(db, 'people', id);
    await deleteDoc(personDoc);
  };

  return (
    <div>
      {/*// Handle this promise (Why does it not complain like the others?)*/}
      <form onSubmit={peopleEntryHandler}>
        <h1>Add a person</h1>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='age'>Age:</label>
          <input id='age' type='number' />
        </div>
        <div>
          <button type='submit'>Create user</button>
        </div>
      </form>
      <hr />
      <h1>People:</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {`${person.name} is a person and is ${person.age} years old.`}
            <button
              onClick={() => {
                // Handle this promise
                ageIncreaseHandler(person.id, person.age);
              }}
            >
              Increase age
            </button>
            <button
              onClick={() => {
                // Handle this promise
                deletePersonHandler(person.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
