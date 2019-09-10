import React from 'react';
import UserInputBox from './UserInputBox';
import KegTable from './KegTable';


function FilterableKegTable() {
  return (
    <div>
      <br></br>
      <UserInputBox />
      <KegTable />
      
    </div>
  );
}

export default FilterableKegTable;