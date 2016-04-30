export interface IChannel {
    _id?: string,
    name: string,
    private: boolean
}
export let Channels = new Mongo.Collection<IChannel>('channels');