/// <reference path="../global.d.ts" />
import './settings.ts';

/**
 * @namespace PIXI
 */

/**
 * String of the current PIXI version.
 * @memberof PIXI
 */
export const VERSION = '$_VERSION';

// Export dependencies
export * from 'pixi/color.ts';
export * from 'pixi/constants.ts';
export * from 'pixi/extensions.ts';
export * from 'pixi/math.ts';
export * from 'pixi/runner.ts';
export * from 'pixi/settings.ts';
export * from 'pixi/ticker.ts';
export * as utils from 'pixi/utils.ts';

// Export core
export * from './autoDetectRenderer.ts';
export * from './background/BackgroundSystem.ts';
export * from './batch/BatchDrawCall.ts';
export * from './batch/BatchGeometry.ts';
export * from './batch/BatchRenderer.ts';
export * from './batch/BatchShaderGenerator.ts';
export * from './batch/BatchSystem.ts';
export * from './batch/BatchTextureArray.ts';
export * from './batch/ObjectRenderer.ts';
export * from './context/ContextSystem.ts';
export * from './filters/Filter.ts';
export * from './filters/FilterState.ts';
export * from './filters/FilterSystem.ts';
export * from './filters/IFilterTarget.ts';
export * from './filters/spriteMask/SpriteMaskFilter.ts';
export * from './fragments.ts';
export * from './framebuffer/Framebuffer.ts';
export * from './framebuffer/FramebufferSystem.ts';
export * from './framebuffer/GLFramebuffer.ts';
export * from './framebuffer/MultisampleSystem.ts';
export * from './geometry/Attribute.ts';
export * from './geometry/Buffer.ts';
export * from './geometry/BufferSystem.ts';
export * from './geometry/Geometry.ts';
export * from './geometry/GeometrySystem.ts';
export * from './geometry/ViewableBuffer.ts';
export * from './IRenderer.ts';
export * from './IRenderer.ts';
export * from './mask/MaskData.ts';
export * from './mask/MaskSystem.ts';
export * from './mask/ScissorSystem.ts';
export * from './mask/StencilSystem.ts';
export * from './plugin/PluginSystem.ts';
export * from './plugin/PluginSystem.ts';
export * from './projection/ProjectionSystem.ts';
export * from './render/ObjectRendererSystem.ts';
export * from './Renderer.ts';
export * from './renderTexture/BaseRenderTexture.ts';
export * from './renderTexture/GenerateTextureSystem.ts';
export * from './renderTexture/GenerateTextureSystem.ts';
export * from './renderTexture/RenderTexture.ts';
export * from './renderTexture/RenderTexturePool.ts';
export * from './renderTexture/RenderTextureSystem.ts';
export * from './shader/GLProgram.ts';
export * from './shader/Program.ts';
export * from './shader/Shader.ts';
export * from './shader/ShaderSystem.ts';
export * from './shader/UniformGroup.ts';
export * from './shader/utils/checkMaxIfStatementsInShader.ts';
export * from './shader/utils/generateProgram.ts';
export * from './shader/utils/generateUniformBufferSync.ts';
export * from './shader/utils/getTestContext.ts';
export * from './shader/utils/uniformParsers.ts';
export * from './shader/utils/unsafeEvalSupported.ts';
export * from './startup/StartupSystem.ts';
export * from './state/State.ts';
export * from './state/StateSystem.ts';
export * from './system/ISystem.ts';
export * from './systems.ts';
export * from './textures/BaseTexture.ts';
export * from './textures/GLTexture.ts';
export * from './textures/Resources.ts';
export * from './textures/Texture.ts';
export * from './textures/TextureGCSystem.ts';
export * from './textures/TextureMatrix.ts';
export * from './textures/TextureSystem.ts';
export * from './textures/TextureUvs.ts';
export * from './transformFeedback/TransformFeedback.ts';
export * from './transformFeedback/TransformFeedbackSystem.ts';
export * from './utils/Quad.ts';
export * from './utils/QuadUv.ts';
export * from './view/ViewSystem.ts';
