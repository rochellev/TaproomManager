import React from 'react';

function UserInputBox() {
  return (
    <div>
      <form>
        <input type='text'
          placeholder='Search Taproom'/>
        <button type='submit'>Search!</button>
      </form>
    </div>
  );
}

export default UserInputBox;