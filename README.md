# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Use Online Offline

Repo Link `https://github.com/pintudey97/react-use-online-offline.git`

## Install
```javascript
npm i ract-use-online-offline
```

## Code
```javascript
import { ReactOnlineOffline } from 'react-use-online-offline';
import 'react-use-online-offline/dist/style.css';

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

If need black and white `grayscale` when offline add this css in your project
```css
.offline{
  filter: grayscale(100%);
  overflow:hidden;
}
```