declare namespace GlobalMixins
{
    interface DisplayObject
    {
        name: string;
    }

    interface Container
    {
        getChildByName<T extends import('pixi/display').DisplayObject = import('pixi/display').DisplayObject>(
            name: string,
            deep?: boolean,
        ): T;
    }
}
