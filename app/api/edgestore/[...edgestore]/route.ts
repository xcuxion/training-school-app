import {initEdgeStore} from "@edgestore/server"
import {createEdgeStoreNextHandler} from "@edgestore/server/adapters/next/app"

const es = initEdgeStore.create()

const edgeStoreRouter = es.router({
    myPublicImages: es.imageBucket({
        maxSize: 1024 * 1024 * 4
    })
})

const handler = createEdgeStoreNextHandler({router: edgeStoreRouter})

export {handler as GET, handler as POST}

export type EdgeStoreRouter = typeof edgeStoreRouter