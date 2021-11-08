import {useState} from "react";
import "./BottomToolsStyle.scss"

export default function BottomTools({countRow}) {

    const [stateRow, setstateRow] = useState(5);


    const handleChangRow = (e) => {
        setstateRow(e.target.value)
    }

    console.log(stateRow);
    return (
        <div className="bottomTools">
            <div className="bottomTools__pagination">
                <button style={{backgroundImage: "url('img/arrowLeft.png')"}}></button>
                <p>
                    1
                </p>
                <p>/</p>
                <p>6</p>
                <button style={{backgroundImage: "url('img/arrowRight.png')"}}></button>
            </div>
            <div className="bottomTools__NumberPages">
                <p>Rows per page</p>
                <select onChange={handleChangRow} value={stateRow}
                        style={{backgroundImage: "url('img/ShapeDown.png')"}}>
                    {
                        countRow.map(status => <option>{status}</option>)
                    }
                </select>
            </div>
        </div>
    );
}
