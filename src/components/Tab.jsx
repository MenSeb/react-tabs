import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({
    children,
    controls,
    haspopup,
    id,
    onClick,
    onKeyDown,
    onKeyUp,
    removable, // eslint-disable-line no-unused-vars
    selected,
    ...props
}) {
    return (
        <div
            {...props}
            aria-controls={controls}
            aria-haspopup={haspopup.toString()}
            aria-selected={selected.toString()}
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            role="tab"
            tabIndex={selected ? 0 : -1}
        >
            {children}
        </div>
    );
}

Tab.defaultProps = {
    controls: undefined,
    haspopup: false,
    id: undefined,
    onClick: undefined,
    onKeyDown: undefined,
    onKeyUp: undefined,
    removable: undefined,
    selected: false,
};

Tab.propTypes = {
    children: PropTypes.node.isRequired,
    controls: PropTypes.string,
    haspopup: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    removable: PropTypes.bool,
    selected: PropTypes.bool,
};
