import * as React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface DataProps {
  id: number;
  title: string;
  data1: number;
  data2: number;
  data3: number;
  total: number;
}

type PanelProps = {
  data: DataProps;
};

const PanelStyled = styled('div')`
  .card {
    margin: 2%;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.5s;

    &:hover {
      background: #f8d7da;
    }
  }
`;

const Panel = ({ data }: PanelProps) => {
  return (
    <PanelStyled>
      <Card>
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <div>
            <p>3시간 {data.data1}</p>
            <p>6시간 {data.data2}</p>
            <p>12시간 {data.data3}</p>
            <p>일일수집 {data.total}</p>
          </div>
        </Card.Body>
      </Card>
    </PanelStyled>
  );
};

export default Panel;
