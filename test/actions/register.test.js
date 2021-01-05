import { register } from 'actions';
import { childs, state } from '../';

describe('register', () => {
    it('updates the state with the tabs infos', () => {
        expect(register(state, { childs })).toMatchObject({
            ...state,
            datas: state.datas.map((data, index) => {
                const { props } = childs[index];

                return {
                    ...data,
                    removable: props.removable || data.removable,
                };
            }),
        });
    });
});
