import styled from 'styled-components';

const submitBtn = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'blue'
  }
};

export const StyledBtn = styled.button`
  ${submitBtn.toString().replace(/,/g, ';')}
`;