import React from 'react'
import BrandButton from './styled/BrandButton';
import SlidingForm from './styled/SlidingForm';

const FormSignup = () => (
  <SlidingForm signup>
    <h1>Create Account</h1>

    <p> register with your email provided during membership form
    </p>
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="User-Id" type="number" />
      <input placeholder="Password" type="password" />
      <input placeholder="Confirm-Password" type="password" />
    </form>
    <BrandButton>Register</BrandButton>
  </SlidingForm>
)


export default FormSignup;
