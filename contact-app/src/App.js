import React, { Component } from 'react';
import Contacts from './Components/Contact';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = { 
    contacts: [
      {
        id: 0,
        number: '0321123321',
        name: 'Mashaim',
        address: 'FSD'
      }
    ],
  }

  handleContactadd = (aname,anumber,aaddress) => {
    console.log('Contact Added.', aname, anumber, aaddress, this.state.contacts);
    if (anumber !== '' && aname !== '' &&  anumber !== null) {
      
      const contact = this.state.contacts.push({
        id: this.state.contacts.length + 1,
        number: 'anumber',
        name: 'aname',
        address: 'aaddress'
      });

      console.log('Contacts updated ', {contact}, contact);
      this.setState({ contacts: contact });
    }
  }
  
  render() {
    return (
      <div>
        <Navbar
          onIncrement={this.handleContactadd} 
          />
        <Contacts
          contact={this.state.contacts}
        />
      </div>
    );
  }
}
 
export default App;