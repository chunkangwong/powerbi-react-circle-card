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

// export class ReactCircleCard extends React.Component<{}, State> {
//   constructor(props: any) {
//     super(props);
//     this.state = initialState;
//   }

//   private static updateCallback: (data: object) => void = null;

//   public static update(newState: State) {
//     if (typeof ReactCircleCard.updateCallback === "function") {
//       ReactCircleCard.updateCallback(newState);
//     }
//   }

//   public state: State = initialState;

//   public componentWillMount() {
//     ReactCircleCard.updateCallback = (newState: State): void => {
//       this.setState(newState);
//     };
//   }

//   public componentWillUnmount() {
//     ReactCircleCard.updateCallback = null;
//   }

//   render() {
//     const { textLabel, textValue, size, background, borderWidth } = this.state;

//     const style: React.CSSProperties = {
//       width: size,
//       height: size,
//       background,
//       borderWidth,
//     };

//     return (
//       <div className="circleCard" style={style}>
//         <p>
//           {textLabel}
//           <br />
//           <em>{textValue}</em>
//         </p>
//       </div>
//     );
//   }
// }
