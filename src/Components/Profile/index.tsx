import * as React from 'react';
import { useState, useRef, MouseEvent } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import styled from 'styled-components';

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

const Profile = () => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState<null | HTMLElement>(null);
	const ref = useRef(null);

	const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
		setShow(!show);
		console.log(event.target);
		const target = event.target;
		setTarget(target as HTMLElement);
	};
	return (
		<ProfileStyled>
			<div className="item">
				<a href={'/u/'} className="nav-link">
					<img src="" alt="" />
				</a>
			</div>
			<div className="item">
				<p>관리자</p>
				<strong>adminid</strong>
			</div>
			<div className="item">
				<div ref={ref}>
					<button onClick={handleClick}>더 보기</button>
					<Overlay
						show={show}
						target={target}
						placement="bottom"
						container={ref.current}
						containerPadding={20}
					>
						<Popover id="popover-contained">
							<Popover.Content>
								<a href="">마이페이지</a>
								<a href="">로그아웃</a>
							</Popover.Content>
						</Popover>
					</Overlay>
				</div>
			</div>
		</ProfileStyled>
	);
};

export default Profile;
