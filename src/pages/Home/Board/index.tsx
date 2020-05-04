import * as React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

interface BoardDataProps {
  id: number;
  title?: string;
  status?: string;
  result?: string;
  tableKey?: any;
  date?: string;
  chanel?: string;
}
interface ObjectType {
  title?: string;
  status?: string;
  result?: string;
  date?: string;
  chanel?: string;
  origin?: string;
  DiffusionMethod?: string;
}

type BoardProps = {
  boardTitle: string;
  head: ObjectType;
  data: BoardDataProps[];
  onlyMalware?: boolean;
};

const BoardStyled = styled('div')`
  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  table.board td {
    font-size: 1.2rem;
  }
`;

const Board = ({ boardTitle, head, data, onlyMalware }: BoardProps) => {
  const tableKey = Object.keys(head);
  //console.log(data[1][tableKey[0]]);
  return (
    <BoardStyled>
      <h2>{boardTitle}</h2>
      <Table striped bordered hover variant="dark" className="board">
        <thead>
          <tr>
            {Object.values(head).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {onlyMalware ? (
            <>
              {data
                .filter(value => value.result == '악성')
                .slice(0, 9)
                .map(value => (
                  <tr>
                    {tableKey.map((t, index) => (
                      <td>{value[tableKey[index]]}</td>
                    ))}
                  </tr>
                ))}
            </>
          ) : (
            <>
              {data.slice(0, 9).map(value => (
                <tr>
                  {tableKey.map((t, index) => (
                    <td>{value[tableKey[index]]}</td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </BoardStyled>
  );
};

export default Board;
