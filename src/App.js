import './App.css';
import { BackButton, initBackButton } from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    backButton.show();
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
        </SDKProvider>
    );
}
export default App;