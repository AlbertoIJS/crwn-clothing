import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SingIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page">
    <SingIn/>
    <SingUp/>
  </div>
);

export default SignInAndSignUpPage;