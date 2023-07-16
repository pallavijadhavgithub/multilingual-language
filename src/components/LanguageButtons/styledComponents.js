import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid #db1c48;
  border-radius: 7px;
  padding: 10px;
  color: ;
  font-weight: 600;
  margin-right: 30px;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
`
export const ListItem = styled.li`
  list-style-type: none;
`
