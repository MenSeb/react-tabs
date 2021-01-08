import { config } from 'utilities';
import { idTabs, state, tab } from '../';

describe('config', () => {
    it('returns the initial state', () => {
        expect(config(state)).toMatchObject(
            expect.objectContaining({ ...state, datas: expect.any(Array) }),
        );
    });

    it('configures each tab with the adequate options', () => {
        const { datas } = config(state);

        datas.forEach(({ controls, deleted, id, removable }, index) => {
            expect(controls).toMatch(`panel-${idTabs}-${index}`);
            expect(deleted).toBeFalsy();
            expect(id).toMatch(`tab-${idTabs}-${index}`);
            expect(removable).toBe(state.removable);
        });
    });

    it('configures the id of the current tab using the index provided', () => {
        const { datas, idTab } = config(state);

        expect(idTab).toMatch(datas[tab].id);
    });
});
