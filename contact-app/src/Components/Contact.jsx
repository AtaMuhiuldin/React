import React, { Component } from 'react'
import Contact from './Contacts';

class Contacts extends Component {
    render() {
        console.log('Mapping',this.props.contact);
        return (
            <div>
                {
                    this.props.contact.map(contact =>
                    <Contact key={contact.id}
                        contacts={contact}
                        selected 
                        />
                    )
                }
            </div>
        );
    }
}
 
export default Contacts;