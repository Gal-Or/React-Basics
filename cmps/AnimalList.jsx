export function AnimalList(prors) {

    function makeTableRow(animal) {
        const tr = <tr key={animal.type}>
            <td>{animal.type}</td>
            <td>{animal.count}</td>
            <td><a href={`https://www.google.com/search?q=${animal.type}`}>search</a></td>
        </tr>
        return tr
    }

    const animalSecction =
        <section className="animals-section flex flex-column">
            <h1 className="animal-list-title">Rare Animals</h1>
            <div className="animal-table-div flex">
                <table className="animal-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Count</th>
                            <th>More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prors.animalInfos.map(animal => makeTableRow(animal))}
                    </tbody>
                </table>
            </div>
        </section>

    return animalSecction
}