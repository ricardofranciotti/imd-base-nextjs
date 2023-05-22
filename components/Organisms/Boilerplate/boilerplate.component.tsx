
import styled from 'styled-components';
interface SidebarProps {
  isOpen: boolean;

}


const SidebarContainer = styled.div<SidebarProps>`
  grid-area: sidebar;
  position: absolute;
  z-index: 1;
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  height: calc(100vh - 50px);
  background: #4629c9;
  transition: width 0.3s;
  margin-top:50px;
  overflow: hidden;
`;


const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li<SidebarProps>`
  display: flex;
  width:100%;
  svg{
    width:${({ isOpen }) => (isOpen ? '200px' : '250px')};
    color:${({ isOpen }) => (isOpen ? 'white' : 'red')};
  }
`;

export const Separator = styled.hr`
  margin-top:10px;
  margin-bottom:10px;
`;


