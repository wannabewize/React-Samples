import React from 'react';

// https://stackoverflow.com/questions/46835825/conditional-css-in-create-react-app

const DesktopTheme = React.lazy( () => import('./DesktopTheme'));
const MobileTheme = React.lazy( () => import('./MobileTheme'));

const ThemeSelector = ({children, isMobile}) => {
    console.log('Theme Select, isMobile? ', isMobile);
    return (
        <React.Fragment>
            {/* Conditionally render theme, based on the current client context */}
            <React.Suspense fallback={() => null}>
                {isMobile ? <MobileTheme /> : <DesktopTheme />}        
            </React.Suspense>
            {/* Render children immediately! */}
            {children}
        </React.Fragment>
    )
}

export default ThemeSelector;