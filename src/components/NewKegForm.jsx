import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';


function NewKegForm(props) {
  console.log(props);
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsRemaining = null;

  function handleNewKegFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    // creating action object with keg info as payload
    const action = {
      type: 'ADD_KEG',
      id: null,
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsRemaining: _pintsRemaining.value
    };

    // invoke code in reducer
    dispatch(action);
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pintsRemaining.value = '';
  }

  return (
    <div class='d-flex flex-column align-items-center'>
      <div class='well'>
        <h1>New Keg Form</h1>
      </div>
      <br />
      <form onSubmit={handleNewKegFormSubmission}>
        <div class='form-group'>
          <input class='form-control form-control-lg'
            type='text'
            id='name'
            placeholder='Beer Name'
            ref={(input) => { _name = input; }} />
        </div>
        <div class='form-group'>
          <input class='shadow rounded form-control form-control-lg'
            type='text'
            id='brand'
            placeholder='Beer Brewer'
            ref={(input) => { _brand = input; }} />
        </div>
        <div class='form-group'>
          <input class='form-control form-control-lg'
            type='number' step='0.01'
            id='price'
            placeholder='Beer Price'
            ref={(input) => { _price = input; }} />
        </div>
        <div class='form-group'>
          <input class='form-control form-control-lg'
            type='number' step='0.01' max='50'
            id='alcoholContent'
            placeholder='Alcohol Content'
            ref={(input) => { _alcoholContent = input; }} />
        </div>
        <div class='form-group'>
          <input class='form-control form-control-lg'
            type='number'
            id='pintsRemaining'
            placeholder='Pints in this Keg'
            ref={(input) => { _pintsRemaining = input; }} />
        </div>
        <div class='d-flex form-group justify-content-end'>
          <button class='btn btn-primary' type='submit'>Submit!</button>
        </div>
      </form>
      <br></br>
    </div>
  );
}

// redefine the entire NewKegForm component as the return value of connect()

export default connect()(NewKegForm);