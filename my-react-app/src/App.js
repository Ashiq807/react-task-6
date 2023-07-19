import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [formdata,setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isgraduate: false
  });
  console.log(formdata);
  function handlechange(event){
    const {name,type,value,checked} = event.target
    setformdata(function(prevformdata){
      return {...prevformdata, [name]:type === "checkbox" ? checked : value}
    });
  }
  return (
    <>
      <form className='w-25 bg-info text-center p-5'>
          <label for="firstname" className='form-label'>firstname: </label>
          <input type="text" id="firstname" name="firstname" value={formdata.firstname} onChange={handlechange} className='form-control w-50 mx-auto' /><br></br>
          <label for="lastname">lastname: </label>
          <input type="text" id="lastname" name="lastname" value={formdata.lastname} onChange={handlechange} className='form-control w-50 mx-auto' /><br></br>
          <label for="comments">comments: </label>
          <textarea id="comments" name="comments" value={formdata.comments} onChange={handlechange} className='form-control w-50 mx-auto' /><br></br>
          <input type="checkbox" name="isgraduate" id="graduate" checked={formdata.isgraduate} onChange={handlechange} className='form-check-input' />
          <label for="graduate" className='form-check-label'>is graduated</label>  
      </form>
    </>
  );
}

export default App;
