import React, { Children, cloneElement } from 'react';
import { useContextState } from '@menseb/react-context-reducer';
import { Panel } from './';
import { childrenRestricted } from 'utilities';

export default function PanelList({ children }) {
    const { datas, idTab } = useContextState();

    return (
        <>
            {Children.map(children, (child, index) => {
                const { controls, deleted, id } = datas[index];

                if (deleted) return null;

                return cloneElement(child, {
                    id: controls,
                    labelledby: id,
                    hidden: idTab !== id,
                });
            })}
        </>
    );
}

PanelList.defaultProps = {
    children: undefined,
};

PanelList.propTypes = {
    children: childrenRestricted({ multiple: true, types: [Panel] }),
};
