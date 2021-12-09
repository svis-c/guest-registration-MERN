import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GuestListDisplay from './components/GuestListDisplay';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://localhost:8000/api/guestlist');
      setGuestList(data);
    }

    fetchData();
  }, []);

  const addGuest = async (item) => {
    const { data } = await axios.post(
      'http://localhost:8000/api/guestlist',
      item
    );
    console.log(item);
    setGuestList((oldlist) => [...oldlist, data]);
  };

  const removeGuest = async (id) => {
    await axios.delete(`http://localhost:8000/api/guestlist/${id}`);
    setGuestList((oldlist) => oldlist.filter((item) => item._id !== id));
  };

  return (
    <div className='app'>
      <RegistrationForm addGuest={addGuest} />
      <GuestListDisplay removeGuestListProp={removeGuest} list={guestList} />
      <Footer/>
    </div>
  );
}

export default App;
