import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 310px;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  width: 100%;
  gap: 15px;

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Status = styled.span`
  width: 24px;
  height: 24px;

  background-color: #ffffff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding: 10px;

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: var(--accent);
`;
