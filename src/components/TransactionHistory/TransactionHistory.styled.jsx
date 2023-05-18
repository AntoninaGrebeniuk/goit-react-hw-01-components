import styled from '@emotion/styled';

export const Transactions = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  gap: 10px;
  padding: 10px;
  width: 500px;

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1),
    inset -2px -2px 5px var(--white), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const HeadRow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 10px;
`;

export const HeadTitle = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 3);

  font-size: 20px;
  font-weight: 500;
  color: var(--accent);

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const BodyRow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 8px;
`;

export const BodyText = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 3);

  font-size: 16px;
  font-weight: 500;
  color: var(--primary);

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
