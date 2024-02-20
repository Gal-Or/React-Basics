import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const watcherService = {
    getWatchers,
    removeWatcher,
    addWatcher,
    getWatcherById

}

const WATCHER_KEY = 'watcherDB'
// Make demo data
_createWatchers()

async function getWatchers() {
    let watchers = await storageService.query(WATCHER_KEY)
    return watchers;
}

async function removeWatcher(watcherId) {
    await storageService.remove(WATCHER_KEY, watcherId)
}

async function addWatcher(id, fullname, movies) {
    const watcher = _createWatcher(id, fullname, movies)
    const addedWatcher = await storageService.post(WATCHER_KEY, watcher)
    return addedWatcher
}

async function getWatcherById(watcherId) {
    const watcher = await storageService.get(WATCHER_KEY, watcherId)
    return watcher
}

/* Private Functions */
function _createWatchers() {

    // Get watchers from storage
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    // Nothing in storage - generate demo data
    if (!watchers || !watchers.length) {
        watchers = [
            _createWatcher(utilService.makeId(), 'Puki Ba', ['Rambo', 'Rocky']),
            _createWatcher(utilService.makeId(), 'Muki Bi', ['Titanic', 'Avatar']),
            _createWatcher(utilService.makeId(), 'shuki la', ['Mulan', "Harry Potter and the Sorcerer's Stone"])
        ]
    }
    utilService.saveToStorage(WATCHER_KEY, watchers)
}

function _createWatcher(id, fullname, movies) {

    return {
        id,
        fullname,
        movies
    }
}