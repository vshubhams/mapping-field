// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {v4 as uuid} from "uuid"
import FieldBox from "./Components/FieldBox";
import ListData from './Components/ListData';

function App() {
  const [size, setSize] = useState([]);
  const [showData, setShowData] = useState([]);
  // console.log('showData:', showData)
  // console.log('size:', size);

  useEffect(() => {
    setSize([uuid()]);
  }, []);

  const [salesData, setSalesData] = useState({});
  // console.log('salesData:', salesData)
  const [callData, setCallData] = useState({});
  // console.log('callData:', callData)

  const handleData = (e, type) => {
    let { value, name } = e.target;
    if (type === "sales") {
      setSalesData({ ...salesData, [name]: value });
    }
    else {
      setCallData({ ...callData, [name]: value });
    }
  }

  const handleDelete = (name) => {
    let newData = size.filter((el) => el !== name);
    console.log('newData:', newData)
    setSize(newData);

    const newSales = { ...salesData };
    delete newSales[name];
    setSalesData(newSales)

    const newCall = { ...callData }
    delete newCall[name];
    setCallData(newCall);
  }

  const handleSubmit = () => {
    let arr=[]
    for (let key in salesData) {
      let payload = [salesData[key], callData[key]];
      arr.push(payload);
    }
    setShowData(arr);
  }

  return (
    <div className="App">
      <div className="container">
      <div className="titles">
        <h3>Salesforce fields</h3>
        <h3>Callhub fields</h3>
      </div>
        {size.map((el) => {
          return (
            <FieldBox
              key={el}
              handleData={handleData}
              handleDelete={handleDelete}
              name={el}
            />
          );
        })}
        <button onClick={()=>{setSize(prev=>[...prev,uuid()])}}>Add</button>
      </div>
      <button onClick={handleSubmit} className="submit">Submit</button>
      <ListData showData={showData}/>
    </div>
  );
}

export default App;
