import React, { useState } from 'react';
import { base_url } from './Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PreferenceForm = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const navigate=useNavigate()
  const preferences = [
    "Action",
    "Drama",
    "Comedy",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Fantasy",
  ];


  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedPreferences((prev) => [...prev, value]);
    } else {
      setSelectedPreferences((prev) => prev.filter((pref) => pref !== value));
    }
  };

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    const token= localStorage.getItem('token')
    const prefrence=selectedPreferences
    const response=await axios.post(`${base_url}/user/prefrence/`,{
      prefrence
    }, {
      headers: {
          Authorization: `Bearer ${token}`
      },

})
    if (response.status===200){
      navigate('/dashboard')
    }
    console.log("Selected preferences:", {"prefrence":selectedPreferences});
  };

  return (
    <div className='flex flex-col items-center m-20 justify-center'>
      <h2 className='m-2 text-2xl font-bold'>Select Your Preferences</h2>
      <form onSubmit={handleSubmit}>
        {preferences.map((preference) => (
          <div className='bg-purple-50 m-4' key={preference}>
            <input
              className='m-2 p-4 size-5' 
              type="checkbox"
              id={preference}
              value={preference}
              onChange={handlePreferenceChange}
            />
            <label htmlFor={preference}>{preference}</label>
          </div>
        ))}
        <button className='bg-purple-500 px-10 py-2 text-white hover:bg-purple-300 hover:text-black' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PreferenceForm;
