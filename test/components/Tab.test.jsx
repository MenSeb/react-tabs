import { getTab, renderTabs } from '../';

describe('<Tab />', () => {
    beforeEach(() => renderTabs());

    it('renders with children', () => {
        expect(getTab()).not.toBeEmptyDOMElement();
    });

    it('renders with additionnal props', () => {
        expect(getTab()).toHaveClass('tab');
    });
});
