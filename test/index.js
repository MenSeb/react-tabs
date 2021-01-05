export const childs = [
    { props: {} },
    { props: { removable: true } },
    { props: {} },
];
export const childNode = { id: 'idTab' };
export const childNodes = [{ id: 'child-1' }, childNode, { id: 'child-3' }];
export const firstChild = { id: 'idFirstChild' };
export const lastChild = { id: 'idLastChild' };
export const nextSibling = { id: 'idNextSibling' };
export const previousSibling = { id: 'idPreviousSibling' };
export const state = {
    automatic: true,
    datas: [
        { deleted: false, id: 'idRemovable', removable: true },
        { deleted: false, id: 'idTarget', removable: false },
        { deleted: false, id: 'idTab', removable: true },
    ],
    idTab: childNode.id,
    target: childNode,
};
export const target = {
    id: 'idTarget',
    nextSibling: null,
    parentNode: {
        childNodes,
        firstChild: null,
        lastChild: null,
    },
    previousSibling: null,
};
