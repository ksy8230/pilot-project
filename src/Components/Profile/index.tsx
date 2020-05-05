import * as React from 'react';
import { useState, useRef, MouseEvent } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import styled from 'styled-components';
import { UserProps } from '../../types/props';
import { useDispatch } from 'react-redux';
import * as actions from '../../data/rootActions';

type ProfileProps = {
  user: UserProps;
};

const ProfileStyled = styled('div')`
  text-align: right;
  .item {
    display: inline-block;
    padding-left: 1rem;
    text-align: left;
    vertical-align: middle;
  }
  p {
    margin: 0;
  }
  .popover {
    .popover-body {
      a {
        display: block;
        padding: 0.5rem;
        font-size: 1rem;
      }
    }
  }
`;

const Profile = ({ user }: ProfileProps) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState<null | HTMLElement>(null);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    setShow(!show);
    const target = event.target;
    setTarget(target as HTMLElement);
  };

  const logOut = () => {
    dispatch(actions.user.logout());
  };

  return (
    <ProfileStyled>
      <div className="item">
        <a href={`/user/${user && user.userId}`} className="nav-link">
          <img src="" alt="" />
        </a>
      </div>
      <div className="item">
        <p>관리자</p>
        <strong>{user && user.nickname}</strong>
      </div>
      <div className="item">
        <div ref={ref}>
          <div onClick={handleClick}>더 보기</div>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Content>
                <a href="#">마이페이지</a>
                <a href="#" onClick={logOut}>
                  로그아웃
                </a>
              </Popover.Content>
            </Popover>
          </Overlay>
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
