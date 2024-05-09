// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setSelectedContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    } else {
      setSelectedContact(null);
    }

  }, [selectedContactId]);

  return (
    <div className="App">
      {selectedContact ? (
        <div className="selected-contact">
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          {/* Add more contact details here if needed */}
          <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;
