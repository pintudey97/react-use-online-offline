import { useEffect, useState } from "react";
import './style.css';

export const ReactOnlineOffline=()=>{
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(()=>{
    const onLineHandler =()=>{
      setIsOnline(true)
    }
    const offLineHandler =()=>{
      setIsOnline(false)
    }
    window.addEventListener('online', onLineHandler);
    window.addEventListener('offline', offLineHandler);
    return()=>{
      window.removeEventListener('online', onLineHandler);
      window.removeEventListener('offline', offLineHandler);
    }
  },[]);

  {isOnline === true? (
    document.getElementById("body").classList.remove('offline')
  ) : (
    document.getElementById("body").classList.add('offline')
  )};

  {isOnline === true? (
    document.getElementById("body").classList.add('online')
  ) : (
    document.getElementById("body").classList.remove('online')
  )};


  return {
    isOnline
  };
}

export default ReactOnlineOffline;