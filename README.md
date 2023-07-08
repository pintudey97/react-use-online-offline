# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Use Online Offline

Repo Link `https://github.com/pintudey97/react-use-online-offline.git`

## Code
```javascript
import { ReactOnlineOffline } from './ReactOnlineOffline';

  const UseOnlineOffline=()=>{
  const { isOnline } = ReactOnlineOffline();

    return (
      <React.Fragment>
        <div className="msgbox">{isOnline===true? 'You are online':'You are offline'}</div>
      </React.Fragment>
    );
  }
```

Add `body` id in `public/index.html`
```html
<body id="body">
```
