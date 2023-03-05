
import styled from 'styled-components'

function Button({onClick, children, type}) {

  if(type === 'primario'){
    return <Primario onClick={onClick}>{children}</Primario>
  }

  if(type === 'secundario'){
    return <Secundario onClick={onClick}>{children}</Secundario>
  }

  return <ButtonUI onClick={onClick}>{children}</ButtonUI>
}


export default Button


const ButtonUI = styled.button`
  border-radius: 20px;
  background-color: blue;
  color: #fff;
  padding: 10px 20px;

  outline: none;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  font-weight: bold;
`;

const Primario = styled(ButtonUI)`
  background-color: green;
`;

const Secundario = styled(ButtonUI)`
  background-color: orange;
`;