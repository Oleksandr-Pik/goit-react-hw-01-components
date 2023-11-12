import styled from '@emotion/styled';

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

export const Avatar = styled.img`
  max-width: 48px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props =>{
    return props.status ? 'green' : 'red'
  }};
`;
