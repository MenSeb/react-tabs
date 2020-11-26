import React from 'react';
import { render } from 'react-dom';
import { Tabs } from '~';

function Demo() {
    return <Tabs id="tabs" />;
}

render(<Demo />, document.getElementById('root'));
