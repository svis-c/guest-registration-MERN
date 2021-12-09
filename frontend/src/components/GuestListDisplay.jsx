import React from 'react';
import Guest from './Guest';

const GuestListDisplay = ({ list, removeGuestListProp }) => {
  const renderedList = list.map((item) => (
    <Guest
      name={item.name}
      email={item.email}
      age={item.age}
      removeGuestItemProp={(e) => removeGuestListProp(item.id)}
      key={item.id}
    />
  ));
  return (
    <div>
      <h1>Guest list</h1>
      <div className='full-list-display'>{renderedList}</div>
    </div>
  );
};

export default GuestListDisplay;
