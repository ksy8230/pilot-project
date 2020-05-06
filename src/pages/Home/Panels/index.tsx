import * as React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Panel from './Panel';
import styled from 'styled-components';
import Slider from 'react-slick';

const fakeData = [
  { id: 1, title: '정보 공유 자동화', data1: 12, data2: 66, data3: 22, total: 1111 },
  { id: 2, title: '세인트 시큐리티', data1: 12, data2: 34, data3: 7, total: 11411 },
  { id: 3, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 4, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 5, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 6, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 7, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 8, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 9, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
  { id: 10, title: '관심 웹 사이트', data1: 12, data2: 45, data3: 98, total: 12111 },
];

const PanelsStyled = styled('div')`
  padding: 1rem 0;
  background: #ddd;
`;

const Panels = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <PanelsStyled>
      <Container fluid>
        <>
          <Slider {...settings}>
            {fakeData.map(value => (
              <div>
                <Panel data={value} />
              </div>
            ))}
          </Slider>
        </>
      </Container>
    </PanelsStyled>
  );
};

export default Panels;
