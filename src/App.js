import './App.css';
import { BackButton, initBackButton, parseInitData} from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    const initDataString = window.location.search.slice(1);
    const initData = parseInitData(initDataString);
    backButton.show();
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
            <span>{parseInitData(initDataString)}</span>
        </SDKProvider>
    );
}
export default App;