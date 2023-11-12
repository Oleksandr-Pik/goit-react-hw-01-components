import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: #e7ecf2;
  padding: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  background-color: #fff;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: #6b6c6d;
  padding: 30px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #dcdcdc;
  color: #fff;
  background-color: #4dc5f7;
`;

export const Label = styled.span`
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
