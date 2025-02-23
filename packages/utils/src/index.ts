/**
 * Generalized convenience utilities for PIXI.
 * @example
 * import { utils } from 'pixi.js';
 * // Extend PIXI's internal Event Emitter.
 * class MyEmitter extends utils.EventEmitter {
 *     constructor() {
 *         super();
 *         console.log('Emitter created!');
 *     }
 * }
 *
 * // Get info on current device
 * console.log(utils.isMobile);
 * @namespace PIXI.utils
 */

import './settings.ts';

/**
 * A simple JS library that detects mobile devices.
 * @see {@link https://github.com/kaimallea/isMobile}
 * @memberof PIXI.utils
 * @name isMobile
 * @member {object}
 * @property {boolean} any - `true` if current platform is tablet or phone device
 * @property {boolean} tablet - `true` if current platform large-screen tablet device
 * @property {boolean} phone - `true` if current platform small-screen phone device
 * @property {object} apple -
 * @property {boolean} apple.device - `true` if any Apple device
 * @property {boolean} apple.tablet - `true` if any Apple iPad
 * @property {boolean} apple.phone - `true` if any Apple iPhone
 * @property {boolean} apple.ipod - `true` if any iPod
 * @property {object} android -
 * @property {boolean} android.device - `true` if any Android device
 * @property {boolean} android.tablet - `true` if any Android tablet
 * @property {boolean} android.phone - `true` if any Android phone
 * @property {object} amazon -
 * @property {boolean} amazon.device - `true` if any Silk device
 * @property {boolean} amazon.tablet - `true` if any Silk tablet
 * @property {boolean} amazon.phone - `true` if any Silk phone
 * @property {object} windows -
 * @property {boolean} windows.device - `true` if any Windows device
 * @property {boolean} windows.tablet - `true` if any Windows tablet
 * @property {boolean} windows.phone - `true` if any Windows phone
 */
export { isMobile } from 'pixi/settings.ts';

/**
 * A high performance event emitter
 * @see {@link https://github.com/primus/eventemitter3}
 * @memberof PIXI.utils
 * @class EventEmitter
 */
export { default as EventEmitter } from 'eventemitter3';

/**
 * A polygon triangulation library
 * @see {@link https://github.com/mapbox/earcut}
 * @memberof PIXI.utils
 * @method earcut
 * @param {number[]} vertices - A flat array of vertex coordinates
 * @param {number[]} [holes] - An array of hole indices
 * @param {number} [dimensions=2] - The number of coordinates per vertex in the input array
 * @returns {number[]} Triangulated polygon
 */
export { default as earcut } from 'earcut';

/**
 * Node.js compatible URL utilities.
 * @see https://www.npmjs.com/package/url
 * @memberof PIXI.utils
 * @name url
 * @member {object}
 */
export * from './url.ts';

/**
 * Browser and Node.js compatible path utilities.
 * All paths that are passed in will become normalized to have posix separators.
 * @memberof PIXI.utils
 * @name path
 * @member {object}
 */
export * from './path.ts';

// Other exports
export * from './browser/hello.ts';
export * from './browser/isWebGLSupported.ts';
export * from './color/hex.ts';
export * from './color/premultiply.ts';
export * from './const.ts';
export * from './data/createIndicesForQuads.ts';
export * from './data/getBufferType.ts';
export * from './data/interleaveTypedArrays.ts';
export * from './data/pow2.ts';
export * from './data/removeItems.ts';
export * from './data/sign.ts';
export * from './data/uid.ts';
export * from './logging/deprecation.ts';
export * from './media/BoundingBox.ts';
export * from './media/caches.ts';
export * from './media/CanvasRenderTarget.ts';
export * from './media/getCanvasBoundingBox.ts';
export * from './media/trimCanvas.ts';
export * from './network/decomposeDataUri.ts';
export * from './network/determineCrossOrigin.ts';
export * from './network/getResolutionOfUrl.ts';
export * from './types.ts';
