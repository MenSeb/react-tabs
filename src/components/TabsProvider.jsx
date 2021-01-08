import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Provider } from '@menseb/react-context-reducer';
import { Tabs } from './';
import actions from 'utilities/actions';
import {
    childrenRestricted,
    config,
    ORIENTATION_HORIZONTAL,
    ORIENTATION_VERTICAL,
} from 'utilities';

export default function TabsProvider({
    automatic,
    children,
    label,
    orientation,
    optimise,
    override,
    removable,
    tab,
    tabs,
}) {
    const { current: idTabs } = useRef(nanoid());

    const { current: initial } = useRef({
        automatic,
        idTabs,
        label,
        optimise,
        orientation,
        override,
        removable,
        tab,
        tabs,
    });

    return (
        <Provider actions={actions} config={config} initial={initial}>
            {children}
        </Provider>
    );
}

TabsProvider.defaultProps = {
    automatic: true,
    children: undefined,
    optimise: false,
    orientation: ORIENTATION_HORIZONTAL,
    override: false,
    removable: false,
    tab: 0,
};

TabsProvider.propTypes = {
    automatic: PropTypes.bool,
    children: childrenRestricted({ types: [Tabs] }),
    label: PropTypes.string.isRequired,
    optimise: PropTypes.bool,
    orientation: PropTypes.oneOf([
        ORIENTATION_HORIZONTAL,
        ORIENTATION_VERTICAL,
    ]),
    override: PropTypes.bool,
    removable: PropTypes.bool,
    tab: PropTypes.number,
    tabs: PropTypes.number.isRequired,
};
