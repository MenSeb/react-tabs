import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({
    children,
    click,
    controls,
    haspopup,
    id,
    selected,
    ...props
}) {
    return (
        <button
            {...props}
            aria-controls={controls}
            aria-haspopup={haspopup.toString()}
            aria-selected={selected.toString()}
            id={id}
            onClick={click}
            role="tab"
            tabIndex={selected ? null : -1}
            type="button"
        >
            {children}
        </button>
    );
}

Tab.defaultProps = {
    haspopup: false,
};

Tab.propTypes = {
    children: PropTypes.node.isRequired,
    click: PropTypes.func.isRequired,
    controls: PropTypes.string.isRequired,
    haspopup: PropTypes.bool,
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
};
