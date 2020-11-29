import React from 'react';
import PropTypes from 'prop-types';

export default function TabList({ children, label, orientation, ...props }) {
    return (
        <div
            {...props}
            aria-label={label}
            aria-orientation={orientation}
            role="tablist"
        >
            {children}
        </div>
    );
}

TabList.defaultProps = {
    orientation: 'horizontal',
};

TabList.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};
