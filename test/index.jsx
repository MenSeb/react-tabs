import React from 'react';
import { render, screen } from '@testing-library/react';
import { Panel, PanelList, Tab, TabList, Tabs, TabsProvider } from 'components';

export const label = 'select a tab';
export const tab = 2;
export const tabs = 5;
export const idTabs = 'idTabs';
export const childs = Array.from({ length: tabs }, (_, index) => ({
    props: {
        removable: index > tab ? true : undefined,
    },
}));
export const childNode = { id: `tab-${idTabs}-${tab}` };
export const firstChild = { id: `tab-${idTabs}-0` };
export const lastChild = { id: `tab-${idTabs}-${tabs - 1}` };
export const nextSibling = { id: `tab-${idTabs}-${tab + 1}` };
export const previousSibling = { id: `tab-${idTabs}-${tab - 1}` };
export const childNodes = [
    firstChild,
    previousSibling,
    childNode,
    nextSibling,
    lastChild,
];
export const target = {
    focus: jest.fn(),
    id: childNode.id,
    nextSibling: null,
    parentNode: {
        childNodes,
        firstChild: null,
        lastChild: null,
    },
    previousSibling: null,
};
export const state = {
    automatic: true,
    datas: Array.from({ length: tabs }, (_, index) => ({
        deleted: false,
        id: `tab-${idTabs}-${index}`,
        removable: index > tab ? true : false,
    })),
    idTab: target.id,
    idTabs,
    removable: false,
    tab,
    tabs,
};

export function wrapper({
    children,
    props = {},
    propsPanel = {},
    propsPanelList = {},
    propsTab = {},
    propsTabList = {},
    propsTabs = {},
} = {}) {
    return (
        <TabsProvider label={label} tab={tab} tabs={tabs} {...props}>
            <Tabs className="tabs" {...propsTabs}>
                <TabList className="tablist" {...propsTabList}>
                    {Array.from({ length: tabs }, (_, tab) => (
                        <Tab className="tab" key={tab} {...propsTab}>
                            {tab < 1 && children ? children : undefined}
                            tab ${tab}
                        </Tab>
                    ))}
                </TabList>
                <PanelList {...propsPanelList}>
                    {Array.from({ length: tabs }, (_, panel) => (
                        <Panel className="panel" key={panel} {...propsPanel}>
                            panel ${panel}
                        </Panel>
                    ))}
                </PanelList>
            </Tabs>
        </TabsProvider>
    );
}

export function renderTabs(options) {
    return render(wrapper(options));
}

export function getAllPanels(hidden = true) {
    return screen.getAllByRole('tabpanel', { hidden });
}

export function getPanel(index = 0, hidden) {
    return getAllPanels(hidden)[index];
}

export function getAllTabs() {
    return screen.getAllByRole('tab');
}

export function getTab(index = 0) {
    return getAllTabs()[index];
}

export function getTabs() {
    return screen.getByRole('region');
}

export function getList() {
    return screen.getByRole('tablist');
}
