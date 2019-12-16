import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps): JSX.Element => {
  const { compiler, framework } = props;

  return (
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  );
};
