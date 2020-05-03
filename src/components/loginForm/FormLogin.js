import React from 'react';
import BrandButton from './styled/BrandButton';
import SlidingForm from './styled/SlidingForm';

const FormLogin = () => (
  <SlidingForm>
    <h1>Sign in</h1>

    <p>use your Email provided during registration</p>
    <form>
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
    </form>
    <p>
      {/* <a>Forgot your password?</a> */}
    </p>
    <BrandButton>Sign in</BrandButton>
  </SlidingForm>
)

export default FormLogin;
