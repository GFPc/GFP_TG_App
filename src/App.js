import './App.css';
import {initBackButton, parseInitData} from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    var url = window.location.href.split("#")[1];
    url = new URLSearchParams(url)
    url = url.get("tgWebAppData")
    console.log(url)


    const initDataString = url
    //console.log(initDataString)
    const initData = parseInitData(initDataString);
    backButton.show();
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
            <span>{initData.user.firstName}</span>
            <span>{JSON.stringify(initData.user, null, 4)}</span>
        </SDKProvider>
    );
}
export default App;