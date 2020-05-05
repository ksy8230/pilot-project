import * as React from 'react';
import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import LeftNaviagation from '../Components/LeftNavigation';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import TopNavigation from '../Components/TopNavigation';

import * as selectors from '../data/rootSelectors';
import * as actions from '../data/rootActions';

type DefaultLayoutProps = {
  path: string;
  component: any;
};

const DefaultLayoutStyled = styled('div')`
  .default-layout {
    margin-right: 0;
  }
  .nav-area {
    padding-right: 0;
    background-color: #20232a;
  }
  .content-area {
    padding-right: 15px;
    padding-left: 0;
  }
`;

const DefaultLayout = ({ component: Component, ...rest }: DefaultLayoutProps) => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.getUser); // {userId: 1, nickname: "sy"}

  useLayoutEffect(() => {
    dispatch(actions.user.loadMe());
  }, []);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <DefaultLayoutStyled>
          <Row className="default-layout">
            <Col sm={1} className="nav-area">
              <LeftNaviagation user={user} />
            </Col>
            <Col sm={11} className="content-area">
              <TopNavigation user={user} />
              <Component {...matchProps} {...rest} />
            </Col>
          </Row>
        </DefaultLayoutStyled>
      )}
    />
  );
};

export default DefaultLayout;
