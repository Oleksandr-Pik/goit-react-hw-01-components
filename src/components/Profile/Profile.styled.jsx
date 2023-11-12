import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #e7ecf2;
  padding: 100px;
  margin-bottom: 100px;
`;

export const Description = styled.div`
  background-color: #fff;
  padding: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #6b6c6d;
`;

export const Avatar = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #fcfcfccb;
`;

export const StatsItem = styled.li`
  width: 33.33%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #dcdcdc;
`;

export const Label = styled.span`
  font-weight: 500;
  color: #6b6c6d;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
