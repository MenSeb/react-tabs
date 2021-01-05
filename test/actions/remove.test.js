import { remove } from 'actions';
import { nextSibling, previousSibling, state, target } from '../';

describe('remove', () => {
    it('returns the state if the tab is not removable', () => {
        expect(remove(state, { target })).toBe(state);
    });

    describe('When the removed tab is not the active tab', () => {
        it('updates the state and keeps the current active tab', () => {
            expect(
                remove(state, { target: { ...target, id: 'idRemovable' } }),
            ).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === 'idRemovable',
                })),
            });
        });
    });

    describe('When the removed tab is the active tab', () => {
        it('updates the state with the next tab', () => {
            expect(
                remove(state, { target: { ...target, id: 'idTab' } }),
            ).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === 'idTab',
                })),
                idTab: nextSibling.id,
                target: nextSibling,
            });
        });

        it('updates the state awith the previous tab otherwise', () => {
            expect(
                remove(state, {
                    target: { ...target, id: 'idTab', nextSibling: null },
                }),
            ).toMatchObject({
                ...state,
                datas: state.datas.map((data) => ({
                    ...data,
                    deleted: data.id === 'idTab',
                })),
                idTab: previousSibling.id,
                target: previousSibling,
            });
        });
    });
});
