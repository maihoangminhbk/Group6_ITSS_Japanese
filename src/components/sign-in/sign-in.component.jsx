import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

import LoadingSpinner from '../Popup/popup.component';
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    this.setState({loading: true})
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    this.setState({loading: false})
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
     <>
     <div className='sign-in'>
     <h2>I already have an account</h2>
     <span>Sign in with your email and password</span>

     <form onSubmit={this.handleSubmit}>
       <FormInput
         name='email'
         type='email'
         handleChange={this.handleChange}
         value={this.state.email}
         label='email'
         required
       />
       <FormInput
         name='password'
         type='password'
         value={this.state.password}
         handleChange={this.handleChange}
         label='password'
         required
       />
       <div className='buttons'>
         <CustomButton type='submit'> Sign in </CustomButton>
         <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
           Sign in with Google
         </CustomButton>
       </div>
     </form>
   </div>
      {this.state.loading && <LoadingSpinner />}
   </>
    );
  }
}

export default SignIn;
