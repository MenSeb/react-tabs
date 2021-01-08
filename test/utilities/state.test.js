import { updateState } from 'utilities';
import { state, target } from '../';

describe('updateState', () => {
    it('returns the state with no selected tab if target is null', () => {
        expect(updateState({ state, target: null })).toMatchObject({
            ...state,
            idTab: null,
            target: null,
        });
    });

    it('returns the state with the next selected tab if update is true', () => {
        expect(updateState({ state, target })).toMatchObject({
            ...state,
            idTab: target.id,
            target,
        });
    });

    it('returns the state with the previous selected tab if update is false', () => {
        expect(updateState({ state, target, update: false })).toMatchObject({
            ...state,
            idTab: state.idTab,
            target,
        });
    });
});
