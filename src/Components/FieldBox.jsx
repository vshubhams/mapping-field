import Sales from "./Sales";
import CallHub from "./CallHub";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCall, addItem, removeCall, removeItem } from "../Redux/actions";

export default function FieldBox({ handleData, name,handleDelete }) {

  const [salesItem, setSalesItem] = useState(null);
  const [callItem, setCallItem] = useState(null);
  const {sales,callHub} = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSales = (e) => {
    setSalesItem(e.target.value);
    handleData(e,"sales");
    let { value } = e.target;
    const fltr = sales.filter((el) => el !== value);
    dispatch(removeItem(fltr))
    dispatch(addItem(salesItem ? [salesItem, ...fltr] : fltr));
  };

  const handleCallHub = (e) => {
    setCallItem(e.target.value);
    handleData(e);
    let { value } = e.target;
    const fltr = callHub.filter((el) => el !== value);
    dispatch(removeCall(fltr))
    dispatch(addCall(callItem ? [callItem, ...fltr] : fltr))
  };

  const handleAddAfterDelete = () => {
    handleDelete(name);
    dispatch(addItem( [salesItem, ...sales]));
    dispatch(addCall([callItem, ...callHub]));
  }

  return (
    <div className="fieldBox">
      <Sales handleData={handleData} handleSales={handleSales} item={salesItem} sales={sales} name={name} /> ~
      <CallHub handleCallHub={handleCallHub} callHub={callHub} item={callItem} name={name}/>
      <button onClick={()=>{handleAddAfterDelete()}}>Delete</button>
    </div>
  );
}
