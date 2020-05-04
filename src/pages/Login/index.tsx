import * as React from 'react';
import Logo from '../../Components/Logo';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

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
      padding: 10rem;
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
  return (
    <LoginStyled>
      <div className="align-center">
        <div className="inner">
          <Form>
            <h1>
              <Logo />
            </h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="OTP Code" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
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
