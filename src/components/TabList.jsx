import React, {
    Children,
    cloneElement,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { useContextReducer } from '@menseb/react-context-reducer';
import { Tab } from './';
import {
    childrenRestricted,
    isKeyValid,
    KEY_CLICK,
    KEY_REGISTER,
} from 'utilities';

export default function TabList({ children, ...props }) {
    const { dispatch, state } = useContextReducer();

    const { datas, idTab, idTabs, label, orientation, override, target } =
        state;

    const refKey = useRef(null);

    const onClickTab = useCallback(
        ({ target }) => dispatch[KEY_CLICK]({ target }),
        [dispatch],
    );

    const onKeyDownTab = useCallback(
        (event) => {
            if (refKey.current !== null) return;

            const { key } = event;

            refKey.current = isKeyValid({ key, orientation, override });

            if (refKey.current) event.preventDefault();
        },
        [orientation, override],
    );

    const onKeyUpTab = useCallback(
        (event) => {
            const { current: keyValid } = refKey;

            refKey.current = null;

            if (!keyValid) return;

            const { key, target } = event;

            dispatch[key]({ target });
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch[KEY_REGISTER]({ childs: Children.toArray(children) });
    }, [children, dispatch]);

    useEffect(() => {
        if (target) target.focus();
    }, [target]);

    return (
        <div
            {...props}
            aria-controls={idTabs}
            aria-label={label}
            aria-orientation={orientation}
            role="tablist"
        >
            {Children.map(children, (child, index) => {
                const { controls, deleted, id } = datas[index];

                if (deleted) return null;

                return cloneElement(child, {
                    controls,
                    id,
                    onClick: onClickTab,
                    onKeyDown: onKeyDownTab,
                    onKeyUp: onKeyUpTab,
                    selected: idTab === id,
                });
            })}
        </div>
    );
}

TabList.defaultProps = {
    children: undefined,
};

TabList.propTypes = {
    children: childrenRestricted({ multiple: true, types: [Tab] }),
};
