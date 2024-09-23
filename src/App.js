import './App.css';
import {initBackButton, parseInitData} from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    const initDataString = decodeURIComponent(window.location.href.split("#tgWebAppData=")[1])
    if(!initDataString) return <div>Not found initData</div>;
    console.log(initDataString);
    const initData = parseInitData(initDataString);
    backButton.show();
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
            <span>{initData}</span>
        </SDKProvider>
    );
}
export default App;