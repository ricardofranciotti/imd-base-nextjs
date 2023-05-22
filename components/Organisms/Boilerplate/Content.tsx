// components/Content.js
import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin-left:55px;
  padding:10px;
  background-color:#1D04DE;
`;


export interface IAppProps {
  children: React.ReactNode;
}

const Content = (props: IAppProps) => {
  return <ContentContainer>
    {props.children}
  </ContentContainer>;
};

export default Content;
