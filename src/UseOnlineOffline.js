import React from "react";
import { ReactOnlineOffline } from './ReactOnlineOffline';
const UseOnlineOffline=()=>{

  const { isOnline } = ReactOnlineOffline();

  return (
    <React.Fragment>
      <div className="msgbox">{isOnline===true? 'You are online':'You are offline'}</div>
    </React.Fragment>
  );
}

export default UseOnlineOffline;