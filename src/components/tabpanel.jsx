import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanel({
    children,
    hidden,
    id,
    label,
    tag: Tag,
    ...props
}) {
    return (
        <Tag
            {...props}
            aria-labelledby={label}
            hidden={hidden}
            id={id}
            role="tabpanel"
            tabIndex={0}
        >
            {children}
        </Tag>
    );
}

TabPanel.defaultProps = {
    tag: 'div',
};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tag: PropTypes.string,
};
