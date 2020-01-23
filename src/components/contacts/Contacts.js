import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'yasweb',
        email: 'yasweb@gmail.com',
        phone: '0666666'
      },
      {
        id: 2,
        name: 'yasweb react',
        email: 'react@gmail.com',
        phone: '07777777777'
      },
      {
        id: 3,
        name: 'yasweb symfony',
        email: 'symfony@gmail.com',
        phone: '08888888'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
