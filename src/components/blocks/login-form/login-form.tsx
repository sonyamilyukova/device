import React, { useState } from 'react';
import { Modal } from '../../layout';
import { Title, Input, Button, Alert } from '../../ui';
import { useStore } from "effector-react";
import { $users, loadUsers, findUser } from '../../../model/users';
import { Wrapper } from './styles';

export interface ILoginForm {
  isOpen: boolean;
  setOpen: any;
  alert: boolean;
  setAlert: (params: any) => any;
}

const LoginForm: React.FC<ILoginForm> = ({ isOpen, setOpen, alert, setAlert }) => {
  const users = useStore($users);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [register, setRegister] = useState(false);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <Title as='h2' size='L' marginBottom={60}>
        {register ? 'Регистрация' : 'Вход'}
      </Title>
      {alert ? (
        <Alert marginTop={-30} marginBottom={30}>
          Неверное имя или пароль (try Ervin Howell)
        </Alert>
      ) : null}
      <form onSubmit={evt => evt.preventDefault()}>
        <Input
          width={register ? '100%' : '65%'}
          label='Имя:'
          type='text'
          placeholder='Имя Фамилия'
          marginBottom={30}
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        {register ? (
          <Wrapper>
            <Input
              label='E-mail:'
              type='email'
              placeholder='krasotka92@mail.ru'
              marginBottom={30}
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
            <Input
              label='Телефон:'
              type='phone'
              placeholder='+7(000)000-00-00'
              marginBottom={30}
              value={phone}
              onChange={evt => setPhone(evt.target.value)}
            />
          </Wrapper>
        ) : null}
        <Input
          width={register ? '100%' : '65%'}
          label='Пароль:'
          type='password'
          placeholder='********'
          value={password}
          onChange={evt => setPassword(evt.target.value)}
        />
        {!register ? (
          <Button
            type='submit'
            marginTop={65}
            highlighted
            onClick={() => {
              loadUsers()
                .then(() => {
                  findUser({
                    name: name,
                    password: password
                  })
                })
                .then(() => {
                  if (users.loginError) setAlert(true);
                  else setOpen(false);
                });
            }}
          >
            Войти
          </Button>
        ) : null}
        <Button
          type={register ? 'submit' : 'button'}
          marginTop={65}
          marginRight={45}
          marginLeft={register ? 0 : 45}
          highlighted={register}
          onClick={() => {
            setAlert(false);
            setRegister(true);
          }}
        >
          Зарегистрироваться
        </Button>
        {register ? (
          <Button
            type='button'
            marginTop={65}
            onClick={() => setRegister(false)}
          >
            Назад
          </Button>
        ) : null}
      </form>
    </Modal>
  )
}

export default LoginForm;
