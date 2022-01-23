import { useState } from 'react';

import {ReactComponent as Logo} from '../../assets/icons/logo-big.svg'
import { CtaBtn } from '../../components/buttons/cta-btn/CtaBtn.component';
import { TextInput } from '../../components/inputs/text-input/TextInput.component';

import './login.style.scss'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
e.preventDefault()
  }

  return <div className='login'>
    <Logo></Logo>
    <form className="login__form">
    <TextInput
        id="email"
        name="email"
        type='email'
        value={email}
        setValue={setEmail}
        placeholder="Email"
      ></TextInput>
      <TextInput
        id="password"
        name="password"
        type='password'
        value={password}
        setValue={setPassword}
        placeholder="Password"
      ></TextInput>
      <CtaBtn onClick={handleSubmit} text='Comfirm' type='submit'></CtaBtn>
    </form>
    </div>;
};
