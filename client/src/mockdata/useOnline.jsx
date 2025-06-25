import { useState, useEffect } from "react";

const useOnline = () => {
    const online =()=>{
        setonlinestatus(true);
    }
    const offline =()=>{
        setonlinestatus(false);
    }

    const [onlinestatus, setonlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

  return ()=>{
    window.removeEventListener("online",online);
    window.removeEventListener("offline",offline)
  }
  },[]);
  return onlinestatus;
};
export default useOnline;
