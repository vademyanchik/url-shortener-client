import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="sign-up-page">
          <SignupForm/>
        </div>
      </div>
    )
  }
}

export default SignupPage;
