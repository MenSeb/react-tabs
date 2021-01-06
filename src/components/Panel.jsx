import React from 'react';
import PropTypes from 'prop-types';
import { useContextState } from '@menseb/react-context-reducer';

export default function Panel({
    children,
    hidden,
    id,
    labelledby,
    optimise, // eslint-disable-line no-unused-vars
    ...props
}) {
    const state = useContextState();

    return hidden && state.optimise ? null : (
        <div
            {...props}
            aria-hidden={hidden.toString()}
            aria-labelledby={labelledby}
            hidden={hidden}
            id={id}
            role="tabpanel"
            tabIndex="0"
        >
            {children}
        </div>
    );
}

Panel.defaultProps = {
    hidden: false,
    id: undefined,
    labelledby: undefined,
    optimise: undefined,
};

Panel.propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    labelledby: PropTypes.string,
    optimise: PropTypes.bool,
};
