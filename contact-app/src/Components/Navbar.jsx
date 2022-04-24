import React, { Component } from 'react';

class navbar extends Component {
    render() { 
        const { onIncrement } = this.props;
        return (
            <div className='row mx-2 px-5 py-3 bg-light'>
                <input type='text' placeholder='Mobile Number' id='task_number' className='form-control col m-2' />
                <input type='text' placeholder='Name' id='task_name' className='form-control col m-2' />
                <input type='text' placeholder='Address' id='task_address' className='form-control col m-2' />
                <input type='submit' className='btn btn-secondary col m-2' value='Add' onClick={ ()=>onIncrement(document.getElementById('task_name').value,document.getElementById('task_number').value,document.getElementById('task_address').value) } />
            </div>
        );
    }
}
 
export default navbar;