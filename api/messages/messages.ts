export interface MessageInterface {
    _id?: string
    content: string,
    timestamp: any,
    authorId: string,
    channelId: string
}

export let Messages = new Mongo.Collection<MessageInterface>('messages');