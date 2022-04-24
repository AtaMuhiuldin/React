import React, { Component } from 'react';

class contact extends Component {
    render() {
        const { id, number, name, address } = this.props.contacts;
        console.log('Mounting', id);
        return (
            <div className='row mx-2 px-5 py-3 bg-light'>
                <span className='col'>{number}</span>
                <span className='col'>{name}</span>
                <span className='col'>{address}</span>
                <button className='col btn btn-secondary'>Delete</button>
            </div>
        );
    }
}
 
export default contact;