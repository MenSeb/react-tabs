import userEvent from '@testing-library/user-event';
import { getAllTabPanels, getAllTabs, renderTabs } from '../';

describe('<PanelList />', () => {
    it('renders every panels and removes deleted ones', () => {
        renderTabs({ props: { removable: true } });

        expect(getAllTabPanels()).toHaveLength(2);

        userEvent.type(getAllTabs()[0], '{del}');

        expect(getAllTabPanels()).toHaveLength(1);

        userEvent.type(getAllTabs()[0], '{del}');

        expect(() => getAllTabPanels()).toThrow();
    });
});
