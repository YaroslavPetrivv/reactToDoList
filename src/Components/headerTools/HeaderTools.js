import "./headerToolsStyle.scss"
import CheckboxTool from "./headerTols/CheckboxTool/CheckboxTool";
import {useState} from "react";
import SearchTool from "./headerTols/searchTools/SearchTool";
import SelectTool from "./headerTols/SelectTool/SelectTool";
import {useDispatch, useSelector} from "react-redux";
import {
    changeByPrice,
    changeByStatus, changeByType,
    findByCompany,
    findByContact,
    findBySuy
} from "../../reducers/actionCreators/fileActionCreators";

export default function HeaderTools() {

    const dispatch = useDispatch();


    const [stateCheckbox, setStateCheckbox] = useState(false);

    const [stateSearchCompany, setStateSearchCompany] = useState(''); //1

    const [stateSelectStatus, setStateSelectStatus] = useState('All');

    const [stateSelectType, setStateSelectType] = useState('All');//4

    const [stateSearchSku, setStateSearchSku] = useState('');//2

    const [stateSearchContact, setStateSearchContact] = useState('');//3

    const [stateSelectPrice, setStateSelectPrice] = useState('All');


    const handleSearchCompany = (e) => {
        setStateSearchCompany(e.target.value);
    }

    dispatch(findByCompany(stateSearchCompany));


    const handleCheckbox = (e) => {
        setStateCheckbox(e.target.checked);
    }


    const handleSelectSku = (e) => {
        setStateSearchSku(e.target.value);
    }

    dispatch(findBySuy(stateSearchSku));


    // const handleSearchCompanyTest = (e) => {
    //     setStateSearchCompany(e.target.value);
    // }

    const handleSelectStatus = (e) => {
        setStateSelectStatus(e.target.value);
    }
    dispatch(changeByStatus(stateSelectStatus));

    const handleSelectType = (e) => {
        setStateSelectType(e.target.value);
    }
    dispatch(changeByType(stateSelectType));


    const handleSelectContact = (e) => {
        setStateSearchContact(e.target.value);
    }


    dispatch(findByContact(stateSearchContact));

    const handleSelectPrice = (e) => {
        setStateSelectPrice(e.target.value);
    }

    dispatch(changeByPrice(stateSelectPrice));


    return (
        <div className="headerTools">
            <CheckboxTool stateCheckbox={stateCheckbox} handleCheckbox={handleCheckbox}/>


            <SearchTool stateSearch={stateSearchCompany} handleInput={handleSearchCompany} fieldName="Company"/>


            <SelectTool stateSelect={stateSelectStatus} handleSelect={handleSelectStatus} fieldName="Status"
                        status={['All', 'Active', 'Danger', 'Pending']}/>


            <SelectTool stateSelect={stateSelectType} handleSelect={handleSelectType} fieldName="Type"
                        status={['All', 'Bravo', 'Gold', 'Alfa']}/>


            <SearchTool stateSearch={stateSearchSku} handleInput={handleSelectSku} fieldName="SKU"/>


            <SearchTool stateSearch={stateSearchContact} handleInput={handleSelectContact} fieldName="Contact"/>


            <SelectTool stateSelect={stateSelectPrice} handleSelect={handleSelectPrice} fieldName="Price USD"
                        status={['All', 'cheap', 'dear']}/>

            <p className="headerTools__name">Action</p>
        </div>
    );
}
