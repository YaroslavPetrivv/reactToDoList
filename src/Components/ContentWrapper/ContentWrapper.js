import "./ContentWrapperStyle.scss"
import HeaderTools from "../headerTools/HeaderTools";
import CompaniesContent from "../companiesContent/CompaniesContent";
import BottomTools from "../bottomTools/BottomTools";

export default function ContentWrapper() {
    return (
        <div className="ContentWrapper">
            <HeaderTools/>
            <CompaniesContent/>
            <BottomTools countRow={[5, 10, 15]}/>
        </div>
    );
}
