import { last } from 'actions';
import { lastChild, state, target } from '../';

describe('last', () => {
    it('updates the state with the last tab', () => {
        expect(last(state, { target })).toMatchObject({
            ...state,
            idTab: lastChild.id,
            target: lastChild,
        });
    });
});
