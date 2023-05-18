import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 350px;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  gap: 20px;

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const bgColorIsOnline = props => {
  switch (props.status) {
    case true:
      return 'var(--green)';
    case false:
      return 'var(--red)';
    default:
      return 'var(--light-grey)';
  }
};

export const Status = styled.span`
  width: 22px;
  height: 22px;

  background: ${bgColorIsOnline};
  border: 3px solid var(--light-grey);
  border-radius: 50%;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  padding: 5px;

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const ColorIsOnline = props => {
  switch (props.status) {
    case true:
      return 'var(--accent)';
    case false:
      return 'var(--primary)';
    default:
      return 'var(--accent)';
  }
};

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  // color: var(--accent);
  color: ${ColorIsOnline};
`;
