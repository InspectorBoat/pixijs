import { DisplayObject } from 'pixi/display.ts';
import { MaskData } from 'pixi/core.ts';

import 'pixi/canvas-display.ts';

describe('DisplayObject', () =>
{
    describe('mask', () =>
    {
        it('should change `renderable` field of maskedObject if we use MaskData', () =>
        {
            // @ts-expect-error - Instantiating DisplayObject
            const maskedObject = new DisplayObject();
            // @ts-expect-error - Instantiating DisplayObject
            const maskObject = new DisplayObject();

            maskedObject.mask = new MaskData(maskObject);
            expect(maskObject.renderable).toBe(false);
            maskedObject.mask = null;
            expect(maskObject.renderable).toBe(true);
        });
    });
});
