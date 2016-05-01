export interface ChannelInterface {
    _id?: string,
    name: string,
    private: boolean
}
export let Channels = new Mongo.Collection<ChannelInterface>('channels');