import React from 'react';
import FormInput from '../Components/form-input/form-input.component';
import CustomButton from '../Components/buttons/customButton';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Login to G-BANK</h2>
        <span>Sign in with your Username and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='username'
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
            <CustomButton type='submit' style={{left:"824px",position:"relative"}}> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
