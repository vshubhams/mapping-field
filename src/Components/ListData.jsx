import {v4 as uuid} from "uuid"
function ListData({ showData }) {
    
    return (
        <div>
            <div className="listItem">
                <h4>Salesforce data</h4>
                <h4>CallHub data</h4>
            </div>
            {showData.map((item => (
                <div key={uuid()} className="listItem">
                    <div>{item[0]}</div>
                    <div>{item[1]}</div>
                </div>
            )))}
        </div>
    )
}

export default ListData
