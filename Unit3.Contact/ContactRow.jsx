import React from 'react';

export default function ContactRow({ contact, setSelectedContactId }) {
  const handleClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
