import React from 'react';
import '../index.css';
import { DateRangePicker } from 'rsuite';
//import 'rsuite/dist/styles/rsuite-default.css';

export default function BookForm() {
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(Login(email));
      };
  return (
    <div>
         <form className="form" onSubmit={submitHandler}>
      
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
       <div>
        <DateRangePicker/>
       </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Book Appointment
          </button>
        </div>
        <div>
          <label />
          
        </div>
      </form>
    </div>
  )
}
