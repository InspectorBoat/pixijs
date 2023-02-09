import { ArrayResource } from './ArrayResource';
import { INSTALLED } from './autoDetectResource';
import { BufferResource } from './BufferResource';
import { CanvasResource } from './CanvasResource';
import { CubeResource } from './CubeResource';
import { ImageBitmapResource } from './ImageBitmapResource';
import { ImageResource } from './ImageResource';
import { SVGResource } from './SVGResource';
import { VideoResource } from './VideoResource';

export * from './BaseImageResource.ts';
export * from './Resource.ts';

INSTALLED.push(
    ImageBitmapResource,
    ImageResource,
    CanvasResource,
    VideoResource,
    SVGResource,
    BufferResource,
    CubeResource,
    ArrayResource
);

export * from './AbstractMultiResource.ts';
export * from './ArrayResource.ts';
export * from './autoDetectResource.ts';
export * from './BufferResource.ts';
export * from './CanvasResource.ts';
export * from './CubeResource.ts';
export * from './ImageBitmapResource.ts';
export * from './ImageResource.ts';
export * from './SVGResource.ts';
export * from './VideoResource.ts';
