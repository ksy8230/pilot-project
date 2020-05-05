import * as React from 'react';
import Logo from '../../Components/Logo';
import { Form, Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../data/rootActions';
import * as selectors from '../../data/rootSelectors';

const LoginStyled = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #20232a;
  .align-center {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .inner {
      max-width: 720px;
      padding: 10rem 0;
      text-align: center;
      margin: 0 auto;
      background: #fff;
    }
  }
  h1 {
    text-align: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  form {
    max-width: 320px;
    margin: 0 auto;
    input {
      height: calc(2.5em + 0.7rem + 2px);
      text-align: center;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      font-size: 1.1rem;
      background-color: #2dc967;
      border-color: #2dc967;
    }
    .form-text {
      font-size: 1rem;
      margin: 1rem 0 0.5rem;
      text-align: left;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const { isLoading } = useSelector(selectors.user.getUserState);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    dispatch(actions.user.login({ id: email, password }));
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOtpInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  return (
    <LoginStyled>
      <div className="align-center">
        <div className="inner">
          <Form onSubmit={handleSubmit}>
            <h1>
              <Logo />
            </h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
              />
            </Form.Group>

            <Form.Group controlId="formBasicOTP">
              <Form.Control
                type="text"
                placeholder="OTP Code"
                value={otp}
                onChange={handleOtpInput}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {isLoading ? (
                <>
                  <Spinner animation="grow" />
                </>
              ) : (
                <>Submit</>
              )}
            </Button>
            <Form.Text className="text-muted">
              신규 등록은 관리자에게 문의해 주세요.
              <br />
              cert@fsec.or.kr
            </Form.Text>
          </Form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
