
import * as localForage from 'localforage'

localForage.config({
  driver: localForage.INDEXEDDB,
  name: 'parrot',
  storeName: 'audio-caching'
})

export const storeItem = async (blob: Blob, id: string) => {
  await localForage.setItem(id, blob)
}

export const getItem = async (id: string) => await localForage.getItem<Blob>(id)

