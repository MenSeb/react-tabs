import { getList, renderTabs } from '../';

describe('<TabList />', () => {
    beforeEach(() => renderTabs());

    it('renders with children', () => {
        expect(getList()).not.toBeEmptyDOMElement();
    });

    it('renders with additionnal props', () => {
        expect(getList()).toHaveClass('tablist');
    });
});
