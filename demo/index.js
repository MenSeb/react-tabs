import React from 'react';
import { render } from 'react-dom';
import { Panel, PanelList, Tab, TabList, Tabs, TabsProvider } from '../src';
import './styles.scss';

function Demo() {
    return (
        <>
            <TabsProvider
                automatic={false}
                label="select a tab"
                removable={true}
                optimise={false}
                orientation="vertical"
                override={true}
                tab={0}
                tabs={5}
            >
                <Tabs>
                    <TabList>
                        <Tab removable={false}>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                        <Tab>Tab 4</Tab>
                        <Tab>Tab 5</Tab>
                    </TabList>
                    <PanelList>
                        <Panel>Panel 1</Panel>
                        <Panel>Panel 2</Panel>
                        <Panel>Panel 3</Panel>
                        <Panel>Panel 4</Panel>
                        <Panel>Panel 5</Panel>
                    </PanelList>
                </Tabs>
            </TabsProvider>
        </>
    );
}

render(<Demo />, document.getElementById('root'));
