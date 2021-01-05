export const firstChild = { id: 'idFirstChild' };
export const lastChild = { id: 'idLastChild' };
export const nextSibling = { id: 'idNextSibling' };
export const previousSibling = { id: 'idPreviousSibling' };
export const childNode = { id: 'idTab' };
export const target = {
    id: 'idTarget',
    nextSibling,
    parentNode: {
        childNodes: [childNode],
        firstChild,
        lastChild,
    },
    previousSibling,
};
export const childs = [
    { props: {} },
    { props: { removable: true } },
    { props: {} },
];
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
