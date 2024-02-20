import { Watcher } from "./Watcher.jsx"
export function WatcherList({ watchersList, onRemove, onSelect, onAddWatcher }) {

    const listComp =
        <React.Fragment>
            <button className="add-watcher-btn" onClick={() => onAddWatcher(".add-modal")}>Add Watcher</button>
            <div className="watcher-list-div flex justify-center">
                {watchersList.map(watcher =>
                    <Watcher key={watcher.id} id={watcher.id} fullname={watcher.fullname} movies={watcher.movies}
                        onRem={onRemove} onSel={onSelect} />)}
            </div>
        </React.Fragment>

    return listComp
}