import { getTabs, renderTabs } from '../';

describe('<Tabs />', () => {
    beforeEach(() => renderTabs());

    it('renders with children', () => {
        expect(getTabs()).not.toBeEmptyDOMElement();
    });

    it('renders with additionnal props', () => {
        expect(getTabs()).toHaveClass('tabs');
    });
});
