import CompanyContent from "./companieContent/CompanyContent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCompany} from "../../reducers/actionCreators/fileActionCreators";
import Company from "../../services/CompanisJson"
import "./companiesContentStyle.scss"

export default function CompaniesContent() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCompany(Company))
    }, [])

    const store = useSelector((store) => store);

    const {fileReducer, filterReducer} = store;

    let {companyInfo} = fileReducer;
    const {findByCompany, findBySuy, findByContact, status, type, price} = filterReducer;


    companyInfo = companyInfo.filter(value => (value.nameCompany.includes(findByCompany)));
    companyInfo = companyInfo.filter(value => (value.sku.toString().includes(findBySuy)));
    companyInfo = companyInfo.filter(value => (value.contact.name.includes(findByContact)));

    companyInfo = companyInfo.filter(value => {

        switch (status) {
            case  'Danger': {
                return value.status === 'Danger'
            }
            case  'Active': {
                return value.status === 'Active'
            }
            case  'Pending': {
                return value.status === 'Pending'
            }
            default:
                return value;
        }
    });

    companyInfo = companyInfo.filter(value => {
        switch (type) {
            case  'Bravo': {
                return value.type === 'Bravo'
            }
            case  'Alfa': {
                return value.type === 'Alfa'
            }
            case  'Gold': {
                return value.type === 'Gold'
            }
            default:
                return value;
        }
    });


    companyInfo = (price === 'cheap') ? companyInfo.sort((a, b) => a.price.slice(1) - b.price.slice(1)) : (price === 'dear') ? companyInfo.sort((a, b) => b.price.slice(1) - a.price.slice(1)) : companyInfo;

    return (
        <div className="companiesContent">
            {
                companyInfo.map(({urlImg, nameCompany, status, type, sku, contact, price}) => <CompanyContent
                    urlImg={urlImg} nameCompany={nameCompany} status={status} type={type} sku={sku} contact={contact}
                    price={price}/>)
            }
        </div>
    );
}
