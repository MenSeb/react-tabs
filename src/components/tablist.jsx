import React from 'react';
import PropTypes from 'prop-types';

export default function TabList({
    children,
    label,
    labelledby,
    orientation,
    ...props
}) {
    return (
        <div
            {...props}
            aria-label={label}
            aria-labelledby={labelledby}
            aria-orientation={orientation}
            role="tablist"
        >
            {children}
        </div>
    );
}

TabList.defaultProps = {
    label: undefined,
    labelledby: undefined,
    orientation: 'horizontal',
};

TabList.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string,
    labelledby: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};
