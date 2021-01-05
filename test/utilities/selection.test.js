import {
    selectTab,
    selectTabDelete,
    selectTabFirst,
    selectTabLast,
    selectTabNext,
    selectTabPrev,
} from 'utilities';
import {
    childNode,
    firstChild,
    lastChild,
    nextSibling,
    previousSibling,
    target,
} from '../';

describe('selectTab', () => {
    it('returns the child with the same id as the current tab', () => {
        expect(selectTab(childNode.id, target)).toBe(childNode);
    });

    it('returns null otherwise', () => {
        expect(selectTab('child-4', target)).toBeNull();
    });
});

describe('selectTabDelete', () => {
    it('returns the target nextSibling if it exists', () => {
        expect(selectTabDelete({ nextSibling })).toBe(nextSibling);
    });

    it('returns the target previousSibling otherwise and if it exists', () => {
        expect(selectTabDelete({ previousSibling })).toBe(previousSibling);
    });

    it('returns null otherwise', () => {
        expect(selectTabDelete(target)).toBeNull();
    });
});

describe('selectTabFirst', () => {
    it('returns the target parentNode firstChild if it exists', () => {
        expect(selectTabFirst({ parentNode: { firstChild } })).toBe(firstChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabFirst(target)).toBeNull();
    });
});

describe('selectTabLast', () => {
    it('returns the target parentNode lastChild if it exists', () => {
        expect(selectTabLast({ parentNode: { lastChild } })).toBe(lastChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabLast(target)).toBeNull();
    });
});

describe('selectTabNext', () => {
    it('returns the target nextSibling if it exists', () => {
        expect(selectTabNext({ ...target, nextSibling })).toBe(nextSibling);
    });

    it('returns the target parentNode firstChild otherwise and if it exists', () => {
        expect(selectTabNext({ parentNode: { firstChild } })).toBe(firstChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabNext(target)).toBeNull();
    });
});

describe('selectTabPrev', () => {
    it('returns the target previousSibling if it exists', () => {
        expect(selectTabPrev({ ...target, previousSibling })).toBe(
            previousSibling,
        );
    });

    it('returns the target parentNode lastChild otherwise and if it exists', () => {
        expect(selectTabPrev({ parentNode: { lastChild } })).toBe(lastChild);
    });

    it('returns null otherwise', () => {
        expect(selectTabPrev(target)).toBeNull();
    });
});
