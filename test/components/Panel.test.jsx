import { getPanel, idTabs, renderTabs } from '../';

describe('<Panel />', () => {
    beforeEach(() => renderTabs());

    describe('When rendering', () => {
        it('renders with role tabpanel', () => {
            expect(getPanel()).toBeInTheDocument();
        });

        it('renders with children', () => {
            expect(getPanel()).not.toBeEmptyDOMElement();
        });

        it('renders with attribute id', () => {
            expect(getPanel()).toHaveAttribute('id', `panel-${idTabs}-0`);
        });

        it('renders with attribute aria-labelledby', () => {
            expect(getPanel()).toHaveAttribute(
                'aria-labelledby',
                `tab-${idTabs}-0`,
            );
        });

        it('renders with attribute tabindex 0', () => {
            expect(getPanel()).toHaveAttribute('tabindex', '0');
        });

        it('renders with additionnal props', () => {
            expect(getPanel()).toHaveClass('panel');
        });
    });

    describe('When shown', () => {
        it('renders without attribute hidden', () => {
            expect(getPanel()).not.toHaveAttribute('hidden');
        });

        it('renders with attribute aria-hidden false', () => {
            expect(getPanel()).toHaveAttribute('aria-hidden', 'false');
        });
    });

    describe('When hidden', () => {
        it('renders with attribute hidden', () => {
            expect(getPanel(1, true)).toHaveAttribute('hidden');
        });

        it('renders with attribute aria-hidden true', () => {
            expect(getPanel(1, true)).toHaveAttribute('aria-hidden', 'true');
        });
    });
});
