import { SDKProvider } from '@telegram-apps/sdk-react';

/**
 * Root component for the whole project.
 */
export function Root() {
    return (
        <SDKProvider acceptCustomStyles debug>
            <div>My application!</div>
        </SDKProvider>
    );
}