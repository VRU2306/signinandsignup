import React from 'react';
import StyledOverlay, {
  InnerLogin,
  InnerSignup,
  Button,
  ButtonInnerLogin,
  ButtonInnerSignup
} from './styled/StyledOverlay';


const WelcomeOverlay = () => (
  <InnerLogin className="inner">
    <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
  </InnerLogin>
)

const NewOverlay = () => (
  <InnerSignup className="inner">
    <h1>Hello Member!</h1>
    <p>Enter your details below to register</p>
  </InnerSignup>
)

const Overlay = ({ toggleMode, mode }) => (
  <StyledOverlay className="overlay">
    <WelcomeOverlay />
    <NewOverlay />
    <Button className="button" onClick={toggleMode}>
      <ButtonInnerLogin>Sign in</ButtonInnerLogin>
      <ButtonInnerSignup>Sign up</ButtonInnerSignup>
    </Button>
  </StyledOverlay>
)

export default Overlay;
