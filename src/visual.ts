"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

// Import React dependencies and the added component
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactCircleCard, initialState } from "./component";
import "./../style/visual.less";

export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ComponentElement<any, any>;
  constructor(options: VisualConstructorOptions) {
    this.reactRoot = React.createElement(ReactCircleCard, {});
    this.target = options.element;

    ReactDOM.render(this.reactRoot, this.target);
  }

  public update(options: VisualUpdateOptions) {
    if (options.dataViews && options.dataViews[0]) {
      const dataView: DataView = options.dataViews[0];

      ReactCircleCard.update({
        textLabel: dataView.metadata.columns[0].displayName,
        textValue: dataView.single.value.toString(),
      });
    } else {
      this.clear();
    }
  }

  private clear() {
    ReactCircleCard.update(initialState);
  }
}
