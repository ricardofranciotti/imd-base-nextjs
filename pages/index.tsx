import * as React from 'react';

export interface IAppProps {
  children: React.ReactNode;
}

export default function Home(props: IAppProps) {
  return (
    <h1>HOME PAGE</h1>
  );
}
