import { select } from 'actions';
import { state, target } from '../';

describe('select', () => {
    it('updates the state with the current tab', () => {
        expect(select(state, { target })).toMatchObject({
            ...state,
            idTab: target.id,
            target,
        });
    });
});
