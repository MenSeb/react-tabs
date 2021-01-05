import {
    KEY_DOWN,
    KEY_END,
    KEY_ENTER,
    KEY_HOME,
    KEY_LEFT,
    KEY_REMOVE,
    KEY_RIGHT,
    KEY_SPACE,
    KEY_UP,
    ORIENTATION_HORIZONTAL,
    ORIENTATION_VERTICAL,
    isKeyValid,
} from 'utilities';

describe('isKeyValid', () => {
    it('returns true for selection keys', () => {
        expect(isKeyValid({ key: KEY_ENTER })).toBeTruthy();
        expect(isKeyValid({ key: KEY_SPACE })).toBeTruthy();
    });

    it('returns true for edge keys', () => {
        expect(isKeyValid({ key: KEY_END })).toBeTruthy();
        expect(isKeyValid({ key: KEY_HOME })).toBeTruthy();
    });

    it('returns true for remove keys', () => {
        expect(isKeyValid({ key: KEY_REMOVE })).toBeTruthy();
    });

    describe('When override is true', () => {
        it('returns true for navigation keys', () => {
            [KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP].forEach((key) => {
                expect(isKeyValid({ key, override: true })).toBeTruthy();
            });
        });
    });

    describe('When override is false and orientation is horizontal', () => {
        it('returns true for horizontal navigation keys', () => {
            [KEY_LEFT, KEY_RIGHT].forEach((key) => {
                expect(
                    isKeyValid({ key, orientation: ORIENTATION_HORIZONTAL }),
                ).toBeTruthy();
            });
        });

        it('returns false for vertical navigation keys', () => {
            [KEY_DOWN, KEY_UP].forEach((key) => {
                expect(
                    isKeyValid({ key, orientation: ORIENTATION_HORIZONTAL }),
                ).toBeFalsy();
            });
        });
    });

    describe('When override is false and orientation is vertical', () => {
        it('returns true for vertical navigation keys', () => {
            [KEY_DOWN, KEY_UP].forEach((key) => {
                expect(
                    isKeyValid({ key, orientation: ORIENTATION_VERTICAL }),
                ).toBeTruthy();
            });
        });

        it('returns false for horizontal navigation keys', () => {
            [KEY_LEFT, KEY_RIGHT].forEach((key) => {
                expect(
                    isKeyValid({ key, orientation: ORIENTATION_VERTICAL }),
                ).toBeFalsy();
            });
        });
    });
});
