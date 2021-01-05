import { prev } from 'actions';
import { previousSibling, state, target } from '../';

describe('prev', () => {
    it('updates the state with the previous tab', () => {
        expect(
            prev(state, { target: { ...target, previousSibling } }),
        ).toMatchObject({
            ...state,
            idTab: previousSibling.id,
            target: previousSibling,
        });
    });
});
