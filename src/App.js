import './App.css';
import {initBackButton, parseInitData} from '@telegram-apps/sdk';
import {SDKProvider} from "@telegram-apps/sdk-react";

function App() {
    const [backButton] = initBackButton();
    const initDataString =
        'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +
        '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +
        '&auth_date=1662771648' +
        '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';
    const initData = parseInitData(initDataString);
    backButton.show();
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
            <span>{initData.user.firstName}</span>
            <span>{JSON.stringify(initData.user)}</span>
        </SDKProvider>
    );
}
export default App;