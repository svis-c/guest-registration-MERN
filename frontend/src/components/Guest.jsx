import React, { useState } from 'react';

const Guest = ({ name, email, age, removeGuestItemProp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState([name + ', ' + email + ', DOB: ' + age]);
  const [tempValue, setTempValue] = useState([
    name + ', ' + email + ', DOB: ' + age,
  ]);

  //this is to set edditing function for guest already in the list. Doubleclick allows to edit
  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };
  //enter key saves new value, esc key removes temp value
  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  return isEditing ? (
    <input
      onChange={handleInputOnChange}
      onKeyDown={handleInputKeyDown}
      autoFocus={true}
      value={tempValue}
    />
  ) : (
    <div className='guest-list-single-line'>
      <div onDoubleClick={handleDivDoubleClick}>
        <p>{value}</p>
      </div>
      <hr/>
      <button className='delete-btn' onClick={removeGuestItemProp}>Delete</button>
    </div>
  );
};

export default Guest;
