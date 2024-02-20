const { useState, useEffect } = React
import { WatcherList } from "./WatcherList.jsx"
import { AddWatcherModal } from "./AddWatcherModal.jsx";
import { watcherService } from "../../services/watcher.service.js";
import { utilService } from "../../services/util.service.js";
import { ShowMoviesModal } from "./ShowMoviesModal.jsx"


export function WatcherApp() {

    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    useEffect(() => {
        updateWatcherList()
    }, [])

    async function updateWatcherList() {
        let list = await watcherService.getWatchers()
        setWatchers(list)
    }

    /* watcher comp functions */

    async function onRemove(watcherId) {
        await watcherService.removeWatcher(watcherId)
        let newWatchers = watchers.filter((watcher) => { return watcher.id != watcherId })
        setWatchers(newWatchers)
    }

    async function onSelect(id) {
        let ul = removeChildsElements('movies-list')
        let watcher = (await watcherService.getWatcherById(id))
        watcher.movies.map((m) => {
            ul.appendChild(createNodeEl('li', `${m}`))
        })
        onOpenModal(".movies-modal")
        setSelectedWatcher(watcher)
    }

    /* Movies Modal functions */

    function removeChildsElements(elClassName) {
        let el = document.querySelector(`.${elClassName}`)
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        return el
    }

    function createNodeEl(elType, txt) {
        const node = document.createElement(elType);
        const textnode = document.createTextNode(txt);
        node.appendChild(textnode);
        return node
    }

    /* Add watcher modal funcs*/

    function onAddWatcher() {
        onOpenModal(".add-modal")
    }

    async function onAddBtnInModal() {
        onCloseModal('.add-modal')
        let name = document.querySelector(".fullname").value
        let movies = document.querySelector(".movies").value.split(',')
        let id = utilService.makeId()
        cleanField('fullname')
        cleanField('movies')

        let newWatcher = await watcherService.addWatcher(...Object.values({ id, name, movies }))
        setWatchers([...watchers, newWatcher])
    }

    function cleanField(className) {
        document.querySelector(`.${className}`).value = ''
    }

    /* Modal fumctions  */

    function onOpenModal(className) {
        let modal = document.querySelector(className)
        modal.style.display = "block";
    }

    function onCloseModal(className) {
        let modal = document.querySelector(className)
        modal.style.display = "none";
    }
    /* ------------------------- */

    const appComp =
        <section className="watcher-app-section">
            <h1>Watcher App</h1>
            <WatcherList watchersList={watchers} onRemove={onRemove} onSelect={onSelect} onAddWatcher={onAddWatcher} />
            <AddWatcherModal onCloseModal={onCloseModal} onAddClick={onAddBtnInModal} />
            <ShowMoviesModal onCloseModal={onCloseModal} />
        </section>

    return appComp
}