import { getTabs, idTabs, renderTabs } from '../';

describe('<Panel />', () => {
    beforeEach(() => renderTabs());

    it('renders with role region', () => {
        expect(getTabs()).toBeInTheDocument();
    });

    it('renders with children', () => {
        expect(getTabs()).not.toBeEmptyDOMElement();
    });

    it('renders with attribute id', () => {
        expect(getTabs()).toHaveAttribute('id', idTabs);
    });

    it('renders with attribute aria-live polite', () => {
        expect(getTabs()).toHaveAttribute('aria-live', 'polite');
    });

    it('renders with additionnal props', () => {
        expect(getTabs()).toHaveClass('tabs');
    });
});
