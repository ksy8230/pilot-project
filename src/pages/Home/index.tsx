import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Panels from './Panels';
import Board from './Board';
import styled from 'styled-components';

const fakeTableData1 = [
	{
		id: 1,
		title: 'As3451wewdqsdqd.exe',
		status: '진행',
		result: '정상',
		date: '2020.04.23 10:00:29',
		chanel: '보안관제'
	},
	{
		id: 2,
		title: '124Wqdqwdqeqefqfwef',
		status: '완료',
		result: '탐지위혐없음',
		date: '2020.04.23 10:00:22',
		chanel: '메일서버'
	},
	{
		id: 3,
		title: 'Sfw.dll',
		status: '실패',
		result: '-',
		date: '2020.04.23 09:57:23',
		chanel: '포털사이트'
	},
	{
		id: 4,
		title: 'Sfw2.dll',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:54:23',
		chanel: 'C-TAS',
		origin: 'www.kbbank.com',
		DiffusionMethod: 'CK'
	},
	{
		id: 5,
		title: 'As3451wewdqsdqd.exe',
		status: '완료',
		result: '정상',
		date: '2020.04.23 09:51:42',
		chanel: '보안관제'
	},
	{
		id: 6,
		title: 'As3451wewdqsdqd.exe',
		status: '실패',
		result: '-',
		date: '2020.04.23 09:50:30',
		chanel: '메일서버'
	},
	{
		id: 7,
		title: 'Gt.apk',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:48:22',
		chanel: '포털 사이트',
		origin: 'www.dcicside.com',
		DiffusionMethod: 'CK'
	},
	{
		id: 8,
		title: 'Sfw2.dll',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:47:17',
		chanel: '메일서버',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 9,
		title: 'Sfw2.dll',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:46:20',
		chanel: '메일서버',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 10,
		title: 'Sfw24.dll',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:44:20',
		chanel: '메일서버',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 11,
		title: 'Sfw0.dll',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:42:20',
		chanel: '메일서버',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 12,
		title: 'As3451wewdqsdqd.exe',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:40:42',
		chanel: '보안관제',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 13,
		title: 'As3451wewdqsdqd.exe',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:39:42',
		chanel: '보안관제',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 14,
		title: 'As3661wewdqsdqd.exe',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:39:12',
		chanel: '보안관제',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	},
	{
		id: 15,
		title: 'As3edaewdqsdqd.exe',
		status: '완료',
		result: '악성',
		date: '2020.04.23 09:38:12',
		chanel: '보안관제',
		origin: 'www.wa.com./ada',
		DiffusionMethod: 'Angler'
	}
];

const HomeStyled = styled('div')`
	h2 {
		margin-top: 1.5rem;
	}
	.row.board {
		margin-top: 1.5rem;
	}
`;

const Home = () => {
	return (
		<HomeStyled>
			<Panels />
			<Container fluid>
				<Row className="board">
					<Col sm>
						<Board
							boardTitle="내 분석 요청 현황"
							data={fakeTableData1}
							head={{ title: '파일명/URL', status: '상태', result: '분석결과' }}
						/>
					</Col>
					<Col sm>
						<Board
							boardTitle="최근 악성 코드"
							data={fakeTableData1}
							head={{ date: '탐지 일시', title: '파일명', chanel: '수집 채널' }}
							onlyMalware={true}
						/>
					</Col>
					<Col sm>
						<Board
							boardTitle="최근 악성 URL"
							data={fakeTableData1}
							head={{ date: '탐지 일시', origin: '유포지', DiffusionMethod: '유포 방법' }}
							onlyMalware={true}
						/>
					</Col>
				</Row>
				<Row className="board">
					<Col sm={8}>
						<Board
							boardTitle="실시간 분석 현황"
							data={fakeTableData1}
							head={{
								date: '수집 일시',
								title: '파일명/URL',
								chanel: '수집 채널',
								status: '상태',
								result: '분석결과'
							}}
						/>
					</Col>
					<Col sm={4}>
						<Board
							boardTitle="URL 모니터링"
							data={fakeTableData1}
							head={{
								date: '탐지 일시',
								origin: '유포지',
								DiffusionMethod: '유포 방법'
							}}
							onlyMalware={true}
						/>
					</Col>
				</Row>
			</Container>
		</HomeStyled>
	);
};

export default Home;
