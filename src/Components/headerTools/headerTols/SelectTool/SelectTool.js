import "./SelectStyle.scss"

export default function SelectTool({stateSelect, handleSelect, fieldName, status}) {
    return (
        <div className={(fieldName === "Price USD") ? 'center' : ''}>
            <div className="headerTools_item">
                <div className="headerTools__action">
                    <p className="headerTools__name">{fieldName}</p>
                    <div className="headerTools__button">
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <select onChange={handleSelect} value={stateSelect}
                        style={{backgroundImage: "url('img/ShapeDown.png')"}}>
                    {
                        status.map(status => <option>{status}</option>)
                    }
                </select>
            </div>
        </div>
    );
}
