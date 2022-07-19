# Power BI React Circle Card

<img src="https://user-images.githubusercontent.com/86872605/179803261-0c7f0740-1fd9-41e1-a112-14f22087a1dd.png" width=200 alt="Circle Card labelled as Total Visitor Count">

This project demonstrates the Power BI custom visual development with React as instructed [here](https://docs.microsoft.com/en-us/power-bi/developer/visuals/create-react-visual) in Microsoft official tutorial.

The only difference is that this project uses React functional component instead of class component.

The `update` function is initialized as a state property of the component.

```js
ReactCircleCard.update = null;
```

The `update` function is updated to a function that calls `setState` when the component is mounted with the `useEffect` hook.

```js
React.useEffect(() => {
  ReactCircleCard.update = (newState: State) => {
    setState(newState);
  };
  return () => {
    ReactCircleCard.update = null;
  };
}, []);
```

## [component.tsx](https://github.com/chunkangwong/powerbi-react-circle-card/blob/main/src/component.tsx)

```jsx
import * as React from "react";

export interface State {
  textLabel: string;
  textValue: string;
  size: number;
  background?: string;
  borderWidth?: number;
}

export const initialState: State = {
  textLabel: "",
  textValue: "",
  size: 200,
};

const ReactCircleCard = (): JSX.Element => {
  const [{ textLabel, textValue, size, background, borderWidth }, setState] =
    React.useState(initialState);

  React.useEffect(() => {
    ReactCircleCard.update = (newState: State) => {
      setState(newState);
    };
    return () => {
      ReactCircleCard.update = null;
    };
  }, []);

  const style: React.CSSProperties = {
    width: size,
    height: size,
    background,
    borderWidth,
  };

  return (
    <div className="circleCard" style={style}>
      <p>
        {textLabel}
        <br />
        <em>{textValue}</em>
      </p>
    </div>
  );
};

ReactCircleCard.update = null;

export default ReactCircleCard;
```
