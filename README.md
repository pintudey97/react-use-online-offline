# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Use Online Offline

Repo Link `https://github.com/pintudey97/react-use-online-offline.git`

## Code
`import { ReactOnlineOffline } from './ReactOnlineOffline';
const UseOnlineOffline=()=>{<br /1>const { isOnline } = ReactOnlineOffline();`

  return (<br />
    <React.Fragment><br />
      <div className="msgbox">{isOnline===true? 'You are online':'You are offline'}</div><br />
    </React.Fragment><br />
  );
}
