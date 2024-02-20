
export function AddWatcherModal({ onCloseModal, onAddClick }) {


    let modal =
        <div id="myModal" className="add-modal">
            <div className="modal-content">
                <span className="close" onClick={() => onCloseModal(".add-modal")}>&times;</span>
                <div className="new-watcher-inp">
                    <div className="grid-item-txt">
                        <span>Full Name: </span>
                    </div>
                    <div className="grid-item-inp">
                        <input className="fullname" type="text" />
                    </div>
                    <div className="grid-item-txt">
                        <span>Movies: </span>
                    </div>
                    <div className="grid-item-inp">
                        <input className="movies" type="text" />
                    </div>
                </div>
                <button className="add-btn-modal" onClick={onAddClick}>Add</button>
            </div>
        </div>

    return modal
}