


// pages/index.js
import React, { useState } from 'react';
import Header from './Header';

import Content from './Content';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/index';
import { LeftBarState } from '../../../store/reducer-leftbar';
import { show } from '@/store/reducer-leftbar';
import { noshow } from '@/store/reducer-leftbar';
import Sidebar from '../SideBar';

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content';
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
`;

export interface IAppProps {
  children: React.ReactNode;
}



const Home = (props: IAppProps) => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state: RootState) => state.leftbarstate.leftbar);
  //const [isSidebarOpen, setSidebarOpen] = useState(false);  

  const toggleSidebar = () => {
    //setSidebarOpen(!isSidebarOpen);


    if (isSidebarOpen) {
      dispatch(noshow());
    } else {
      dispatch(show());
    }
  };

  return (
    <MainContainer>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} setSidebarOpen={toggleSidebar} />
      <Content>
        {props.children}
      </Content>
    </MainContainer>
  );
};

export default Home;