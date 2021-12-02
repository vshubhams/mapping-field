function CallHub({ name, item, callHub, handleCallHub }) {
    
  return (
      <div>
          <select onChange={handleCallHub} name={name} id="callhub">
              <option defaultValue>
                  {item ? item : "Choose an option"}
              </option>
              {callHub.map((item) => (
                  <option key={item} value={item}>
                      {item}
                  </option>
              ))}
          </select>
      </div>
  );
}
  
export default CallHub;
  