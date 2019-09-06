import React from 'react';
import UserInputBox from './UserInputBox';
import Keg from './Keg';

function FilterableKegTable() {
  return (
    <div>
      <UserInputBox />
      <Keg name="BigBoy" />
    </div>
  );
}

export default FilterableKegTable;