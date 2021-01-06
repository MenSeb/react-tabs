import userEvent from '@testing-library/user-event';
import { getAllTabs, getTabList, idTabs, renderTabs } from '../';

describe('<TabList />', () => {
    it('renders every tabs and removes deleted ones', () => {
        renderTabs({ props: { removable: true } });

        expect(getAllTabs()).toHaveLength(2);

        userEvent.type(getAllTabs()[0], '{del}');

        expect(getAllTabs()).toHaveLength(1);

        userEvent.type(getAllTabs()[0], '{del}');

        expect(() => getAllTabs()).toThrow();
    });

    describe('When rendering', () => {
        beforeEach(() => renderTabs());

        it('renders with role tablist', () => {
            expect(getTabList()).toBeInTheDocument();
        });

        it('renders with children', () => {
            expect(getTabList()).not.toBeEmptyDOMElement();
        });

        it('renders with attribute aria-controls', () => {
            expect(getTabList()).toHaveAttribute('aria-controls', idTabs);
        });

        it('renders with attribute aria-label', () => {
            expect(getTabList()).toHaveAttribute('aria-label', 'select a tab');
        });

        it('renders with attribute aria-orientation', () => {
            expect(getTabList()).toHaveAttribute(
                'aria-orientation',
                'horizontal',
            );
        });

        it('renders with additionnal props', () => {
            expect(getTabList()).toHaveClass('tablist');
        });
    });
});
