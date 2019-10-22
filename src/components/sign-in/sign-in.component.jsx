import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SingIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''})
    } catch(error) {
      console.error(error);
      
    }
  }


  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render(){
    return(
      <section className="sign-in">
        <h2 >I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <FormInput 
          type="email" 
          name="email" 
          value={this.state.email} 
          handleChange={this.handleChange}
          label='email'
          required/>

          <label htmlFor="password">Password</label>
          <FormInput 
          type="password" 
          name='password' 
          value={this.state.password}
          handleChange={this.handleChange} 
          label='password'
          required/>
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </section>
    );
  }
}

export default SingIn;