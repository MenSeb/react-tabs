import { next } from 'actions';
import { nextSibling, state, target } from '../';

describe('next', () => {
    it('updates the state with the next tab', () => {
        expect(
            next(state, { target: { ...target, nextSibling } }),
        ).toMatchObject({
            ...state,
            idTab: nextSibling.id,
            target: nextSibling,
        });
    });
});
