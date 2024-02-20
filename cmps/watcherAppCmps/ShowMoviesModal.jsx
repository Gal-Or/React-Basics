export function ShowMoviesModal({ onCloseModal }) {


    let modal =
        <div id="myModal" className="movies-modal">
            <div className="modal-content">
                <span className="close" onClick={() => onCloseModal(".movies-modal")}>&times;</span>
                <ul className="movies-list">
                </ul>
                {/* <button className="add-btn-modal"></button> */}
            </div>
        </div>

    return modal
}