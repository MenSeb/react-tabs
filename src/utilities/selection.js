export function selectTab(idTab, { parentNode: { childNodes } }) {
    for (const childNode of childNodes)
        if (childNode.id === idTab) return childNode;

    return null;
}

export function selectTabDelete({ nextSibling, previousSibling }) {
    return nextSibling ? nextSibling : previousSibling;
}

export function selectTabFirst({ parentNode: { firstChild } }) {
    return firstChild;
}

export function selectTabLast({ parentNode: { lastChild } }) {
    return lastChild;
}

export function selectTabNext({ parentNode: { firstChild }, nextSibling }) {
    return nextSibling ? nextSibling : firstChild;
}

export function selectTabPrev({ parentNode: { lastChild }, previousSibling }) {
    return previousSibling ? previousSibling : lastChild;
}
