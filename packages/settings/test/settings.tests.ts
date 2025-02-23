import { settings } from 'pixi/settings.ts';
import 'pixi/core.ts';

describe('settings', () =>
{
    it('should have RESOLUTION', () =>
    {
        expect(settings.RESOLUTION).toBeNumber();
    });

    it('should have PREFER_ENV', () =>
    {
        expect(settings.PREFER_ENV).toBeNumber();
    });

    it('should have RENDER_OPTIONS', () =>
    {
        expect(settings.RENDER_OPTIONS).toBeObject();
    });
});
