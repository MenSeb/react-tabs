import { config } from 'utilities';

const state = {
    automatic: true,
    idTabs: 'idTabs',
    removable: false,
    tab: 1,
    tabs: 3,
};

describe('config', () => {
    it('returns the initial state', () => {
        expect(config(state)).toMatchObject(state);
    });

    it('returns a state with the id of the current tab', () => {
        expect(config(state)).toMatchObject(
            expect.objectContaining({ idTab: expect.any(String) }),
        );
    });

    it('returns a state with tabs datas', () => {
        expect(config(state)).toMatchObject(
            expect.objectContaining({ datas: expect.any(Array) }),
        );
    });

    it('configures each tab with the adequate options', () => {
        const { datas } = config(state);

        datas.forEach(({ controls, deleted, id, removable }, index) => {
            expect(controls).toMatch(RegExp(`panel-${state.idTabs}-${index}`));
            expect(deleted).toBeFalsy();
            expect(id).toMatch(RegExp(`tab-${state.idTabs}-${index}`));
            expect(removable).toBe(state.removable);
        });
    });

    it('configures the id of the current tab using the index provided', () => {
        const { datas, idTab } = config(state);

        expect(idTab).toMatch(datas[state.tab].id);
    });
});
