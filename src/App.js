import './App.css';
import {initBackButton, parseInitData, } from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";
import Header from "./components/header";


function App() {
    const [backButton] = initBackButton();
    var url = window.location.href.split("#")[1];
    url = new URLSearchParams(url)
    url = url.get("tgWebAppData")
    console.log(url)
    backButton.show()


    const initDataString = url
    //console.log(initDataString)
    const initData = parseInitData(initDataString);
    return (
        <SDKProvider acceptCustomStyles debug>
            <Header username={"@"+initData.user.username}/>
            <div>My application!</div>
            <span>{initData.user.firstName}</span>
        </SDKProvider>
    );
}
export default App;