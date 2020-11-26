import React, { memo } from 'react';
import PropTypes from 'prop-types';

export function Tabs({ id }) {
    return <div id={id} />;
}

export default memo(Tabs);

Tabs.defaultProps = {};

Tabs.propTypes = {
    id: PropTypes.string.isRequired,
};
