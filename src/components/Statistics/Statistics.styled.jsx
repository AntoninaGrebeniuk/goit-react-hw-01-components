import styled from '@emotion/styled';

export const Box = styled.section`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  padding: 20px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const StatItem = styled.li`
  padding: 10px;
  text-align: center;
  flex-basis: calc(100% / 5);

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary);
`;

export const Percentage = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: var(--accent);
`;
