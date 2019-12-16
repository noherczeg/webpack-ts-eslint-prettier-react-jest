import * as React from "react";
import * as renderer from "react-test-renderer";
import { Hello } from "./Hello";

describe("Hello", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Hello compiler="TypeScript" framework="React" />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
