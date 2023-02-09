import type { Rectangle } from 'pixi/math.ts';

export interface IFilterTarget
{
    filterArea: Rectangle;
    getBounds(skipUpdate?: boolean): Rectangle;
}
