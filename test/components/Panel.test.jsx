import { getPanel, renderTabs } from '../';

describe('<Panel />', () => {
    beforeEach(() => renderTabs());

    it('renders with children', () => {
        expect(getPanel()).not.toBeEmptyDOMElement();
    });

    it('renders with additionnal props', () => {
        expect(getPanel()).toHaveClass('panel');
    });
});
