/**
 * Generalized convenience utilities for Graphics.
 * @namespace graphicsUtils
 * @memberof PIXI
 */

// for type only
import { SHAPES } from 'pixi/core.ts';
import { buildCircle } from './buildCircle';
import { buildPoly } from './buildPoly';
import { buildRectangle } from './buildRectangle';
import { buildRoundedRectangle } from './buildRoundedRectangle';

import type { BatchDrawCall } from 'pixi/core.ts';
import type { BatchPart } from './BatchPart';
import type { IShapeBuildCommand } from './IShapeBuildCommand';

export * from './ArcUtils.ts';
export * from './BatchPart.ts';
export * from './BezierUtils.ts';
export * from './buildCircle.ts';
export * from './buildLine.ts';
export * from './buildPoly.ts';
export * from './buildRectangle.ts';
export * from './buildRoundedRectangle.ts';
export * from './QuadraticUtils.ts';

/**
 * Map of fill commands for each shape type.
 * @memberof PIXI.graphicsUtils
 * @member {object} FILL_COMMANDS
 */
export const FILL_COMMANDS: Record<SHAPES, IShapeBuildCommand> = {
    [SHAPES.POLY]: buildPoly,
    [SHAPES.CIRC]: buildCircle,
    [SHAPES.ELIP]: buildCircle,
    [SHAPES.RECT]: buildRectangle,
    [SHAPES.RREC]: buildRoundedRectangle,
};

/**
 * Batch pool, stores unused batches for preventing allocations.
 * @memberof PIXI.graphicsUtils
 * @member {Array<PIXI.graphicsUtils.BatchPart>} BATCH_POOL
 */
export const BATCH_POOL: Array<BatchPart> = [];

/**
 * Draw call pool, stores unused draw calls for preventing allocations.
 * @memberof PIXI.graphicsUtils
 * @member {Array<PIXI.BatchDrawCall>} DRAW_CALL_POOL
 */
export const DRAW_CALL_POOL: Array<BatchDrawCall> = [];
