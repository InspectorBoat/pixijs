/// <reference path="../global.d.ts" />
/*
 * Math classes and utilities mixed into PIXI namespace.
 */

import { Circle } from './shapes/Circle';
import { Ellipse } from './shapes/Ellipse';
import { Polygon } from './shapes/Polygon';
import { Rectangle } from './shapes/Rectangle';
import { RoundedRectangle } from './shapes/RoundedRectangle';

export * from './groupD8.ts';
export * from './IPoint.ts';
export * from './IPointData.ts';
export * from './Matrix.ts';
export * from './ObservablePoint.ts';
export * from './Point.ts';
export * from './Transform.ts';

export { Circle };
export { Ellipse };
export { Polygon };
export { Rectangle };
export { RoundedRectangle };

export * from './const.ts';

/*
 * @description Complex shape type
 */
export type IShape = Circle | Ellipse | Polygon | Rectangle | RoundedRectangle;

export interface ISize
{
    width: number;
    height: number;
}
