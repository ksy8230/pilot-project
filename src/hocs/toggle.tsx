import * as React from 'react';

interface HocProps {
  to: string;
  text: string;
  action?: any;
}

export interface Props extends HocProps {
  show: boolean;
}

function toggle<P extends Props>(Component: React.ComponentType<P>) {
  return (props: P) => {
    return props.show ? <Component {...(props as P)} /> : null;
  };
}

export default toggle;
