import {
    selectTab,
    selectTabDelete,
    selectTabFirst,
    selectTabLast,
    selectTabNext,
    selectTabPrev,
} from 'utilities';

const firstChild = {};
const lastChild = {};
const nextSibling = {};
const previousSibling = {};
const childNodes = [{ id: '1' }, { id: '2' }, { id: '3' }];
const parentNode = { childNodes, firstChild: null, lastChild: null };
const target = {
    nextSibling: null,
    parentNode,
    previousSibling: null,
};
const targetNextSibling = { ...target, nextSibling };
const targetPreviousSibling = { ...target, previousSibling };
const parentNodeFirstChild = { ...parentNode, firstChild };
const parentNodeLastChild = { ...parentNode, lastChild };
const targetFirstChild = { ...target, parentNode: parentNodeFirstChild };
const targetLastChild = { ...target, parentNode: parentNodeLastChild };

describe('selectTab', () => {
    it('returns the child with the same id as the current tab', () => {
        expect(selectTab('2', target)).toBe(childNodes[1]);
    });

    it('returns null if no child with the same id as the current tab exists', () => {
        expect(selectTab('4', target)).toBeNull();
    });
});

describe('selectTabDelete', () => {
    it('returns the target nextSibling if it exists', () => {
        expect(selectTabDelete(targetNextSibling)).toBe(nextSibling);
    });

    it('returns the target previousSibling otherwise and if it exists', () => {
        expect(selectTabDelete(targetPreviousSibling)).toBe(previousSibling);
    });

    it('returns null otherwise', () => {
        expect(selectTabDelete(target)).toBeNull();
    });
});

describe('selectTabFirst', () => {
    it('returns the target parentNode firstChild if it exists', () => {
        expect(selectTabFirst(targetFirstChild)).toBe(firstChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabFirst(target)).toBeNull();
    });
});

describe('selectTabLast', () => {
    it('returns the target parentNode lastChild if it exists', () => {
        expect(selectTabLast(targetLastChild)).toBe(lastChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabLast(target)).toBeNull();
    });
});

describe('selectTabNext', () => {
    it('returns the target nextSibling if it exists', () => {
        expect(selectTabNext(targetNextSibling)).toBe(nextSibling);
    });

    it('returns the target parentNode firstChild otherwise and if it exists', () => {
        expect(selectTabNext(targetFirstChild)).toBe(firstChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabNext(target)).toBeNull();
    });
});

describe('selectTabPrev', () => {
    it('returns the target previousSibling if it exists', () => {
        expect(selectTabPrev(targetPreviousSibling)).toBe(previousSibling);
    });

    it('returns the target parentNode lastChild otherwise and if it exists', () => {
        expect(selectTabPrev(targetLastChild)).toBe(lastChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabPrev(target)).toBeNull();
    });
});
