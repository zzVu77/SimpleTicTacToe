import { useState } from "react";
import "./ToggleStyle.css";
// //stateless functional component: la component nhung khong su dung state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// //statefull functional component: là component có sử dụng state o ben trong
// function Toggle2() {
//   const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state
  // 4. update state
  //   const a = useState(false);
  //   console.log(a);
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    //setOn(callBack)->setOn(prevState=>!prevState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      {/* {on ? "On" : "Off"} */}

      {/* <div className="toggle-control">
        <button className="toggle-on" onClick={() => setOn(true)}>
          On
        </button>
        <button className="toggle-off" onClick={() => setOn(false)}>
          Off
        </button>
      </div> */}
    </div>
  );
}
export default Toggle;
