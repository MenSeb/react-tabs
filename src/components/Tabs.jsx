import React from 'react';
import { useContextState } from '@menseb/react-context-reducer';
import { PanelList, TabList } from './';
import { childrenRestricted } from 'utilities';

export default function Tabs({ children, ...props }) {
    const { idTabs } = useContextState();

    return (
        <div {...props} aria-live="polite" id={idTabs} role="region">
            {children}
        </div>
    );
}

Tabs.defaultProps = {
    children: undefined,
};

Tabs.propTypes = {
    children: childrenRestricted({ types: [TabList, PanelList] }),
};
