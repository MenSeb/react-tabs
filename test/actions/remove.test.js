import { remove } from 'actions';
import { nextSibling, previousSibling, state, tabs, target } from '../';

describe('remove', () => {
    it('returns the state if the tab is not removable', () => {
        expect(remove(state, { target })).toBe(state);
    });

    describe('When the removed tab is not the active tab', () => {
        it('updates the state and keeps the current active tab', () => {
            const { id } = state.datas[tabs - 1];

            expect(remove(state, { target: { ...target, id } })).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === id,
                })),
            });
        });
    });

    describe('When the removed tab is the active tab', () => {
        it('updates the state with the next tab', () => {
            const { id } = state.datas[tabs - 1];

            expect(
                remove(
                    { ...state, idTab: id },
                    { target: { ...target, id, nextSibling } },
                ),
            ).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === id,
                })),
                idTab: nextSibling.id,
                target: nextSibling,
            });
        });

        it('updates the state with the previous tab otherwise', () => {
            const { id } = state.datas[tabs - 1];

            expect(
                remove(
                    { ...state, idTab: id },
                    { target: { ...target, id, previousSibling } },
                ),
            ).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === id,
                })),
                idTab: previousSibling.id,
                target: previousSibling,
            });
        });
    });
});
