import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanel({ children, hidden, id, label, ...props }) {
    return (
        <div
            {...props}
            aria-labelledby={label}
            hidden={hidden}
            id={id}
            role="tabpanel"
            tabIndex="0"
        >
            {children}
        </div>
    );
}

TabPanel.defaultProps = {};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
