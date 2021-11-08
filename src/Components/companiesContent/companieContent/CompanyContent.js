import "./CompanyContentStyle.scss"
import {useState} from "react";

export default function CompanyContent({urlImg,nameCompany, status, type, sku, contact: {img, name}, price, isAcvive}) {


    const [menuFallingOutMenuState, setMenuFallingOutMenuState] = useState(false)

    return (
        <div className="companyContent">
            <div className="CheckBox">
                <div className="element-wrapper">
                    <input type="checkbox"
                           placeholder="Search"
                           checked={isAcvive} className="checkbox" id="checkbox1"/>
                    <label htmlFor="checkbox1"> </label>
                </div>
            </div>

            <div className="companyContent__companyName">
                <img src={urlImg} alt=""/>
                <p>{nameCompany}</p>
            </div>
            <div className="companyContent__status">
                <p className={(status === 'active') ? 'active' : (status === 'pending') ? 'pending' : 'danger'}>{status}</p>
            </div>
            <div className="companyContent__type">
                <p>{type}</p>
            </div>
            <div className="companyContent_sku">
                <p>{sku}</p>
            </div>
            <div className="companyContent_contact">
                <img src={img} alt=""/>
                <p>{name}</p>
            </div>
            <div className="companyContent_price">
                <p>{price}</p>
            </div>

            <div className="companyContent_action" onClick={() => setMenuFallingOutMenuState(!menuFallingOutMenuState)}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>

                <div className={(menuFallingOutMenuState) ? "fallingOutMenu" : "fallingOutMenuHidden"}>

                    <button onClick={() => setMenuFallingOutMenuState(!menuFallingOutMenuState)}>
                        Delete
                    </button>

                    <button onClick={() => setMenuFallingOutMenuState(!menuFallingOutMenuState)}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}
