import {
    isOrientationHorizontal,
    isOrientationVertical,
    ORIENTATION_HORIZONTAL,
    ORIENTATION_VERTICAL,
} from 'utilities';

describe('isOrientationHorizontal', () => {
    it('returns true if the orientation is horizontal', () => {
        expect(isOrientationHorizontal(ORIENTATION_HORIZONTAL)).toBeTruthy();
    });

    it('returns false otherwise', () => {
        expect(isOrientationHorizontal(ORIENTATION_VERTICAL)).toBeFalsy();
    });
});

describe('isOrientationVertical', () => {
    it('returns true if the orientation is vertical', () => {
        expect(isOrientationVertical(ORIENTATION_VERTICAL)).toBeTruthy();
    });

    it('returns false otherwise', () => {
        expect(isOrientationVertical(ORIENTATION_HORIZONTAL)).toBeFalsy();
    });
});
