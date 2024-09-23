import './App.css';
import {initBackButton, parseInitData} from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    const url = new URL(window.location.href);
    const initDataString = url.searchParams.get('#tgWebAppData')
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