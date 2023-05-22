// components/Header.js
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    grid-area: header;
    background-color:yellow;
    align-items:center;
    padding-left:5px;
    background: #01058F;
    border-bottom: 1px solid #9e8cf8;
`;

const Header = ({ toggleSidebar }: any) => {
    return (
        <HeaderContainer>
            <FiMenu onClick={toggleSidebar} size={30} style={{ cursor: 'pointer', color: 'white' }} />
        </HeaderContainer>
    );
};

export default Header;