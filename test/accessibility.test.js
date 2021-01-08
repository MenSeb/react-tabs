import { ORIENTATION_HORIZONTAL, ORIENTATION_VERTICAL } from 'utilities';
import {
    getAllPanels,
    getAllTabs,
    getList,
    getPanel,
    getTab,
    getTabs,
    label,
    renderTabs,
    tab,
    tabs,
} from './index.jsx';

// https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
describe('Accessibility', () => {
    describe('Roles', () => {
        beforeEach(() => renderTabs());

        it('renders tabs with role region', () => {
            expect(getTabs()).toBeInTheDocument();
        });

        it('renders tab list with role tablist', () => {
            expect(getList()).toBeInTheDocument();
        });

        it('renders each tab with role tab', () => {
            expect(getAllTabs()).toHaveLength(tabs);
        });

        it('renders each panel with role tabpanel', () => {
            expect(getAllPanels()).toHaveLength(tabs);
        });

        it('renders each tab inside tab list', () => {
            getAllTabs().forEach(expect(getList()).toContainElement);
        });
    });

    describe('Default properties', () => {
        beforeEach(() => renderTabs());

        it('renders tabs with aria-live', () => {
            expect(getTabs()).toHaveAttribute('aria-live', 'polite');
        });

        it('renders tab list with aria-label', () => {
            expect(getList()).toHaveAttribute('aria-label', label);
        });

        it('renders tab list with aria-orientation horizontal', () => {
            expect(getList()).toHaveAttribute(
                'aria-orientation',
                ORIENTATION_HORIZONTAL,
            );
        });

        it('renders each tab with aria-haspopup', () => {
            getAllTabs().forEach((element) => {
                expect(element).toHaveAttribute('aria-haspopup', 'false');
            });
        });

        it('renders and connects tab list with aria-controls', () => {
            expect(getList()).toHaveAttribute('aria-controls', getTabs().id);
        });

        it('renders and connects each tab with aria-controls', () => {
            getAllTabs().forEach((element, index) => {
                expect(element).toHaveAttribute(
                    'aria-controls',
                    getPanel(index).id,
                );
            });
        });

        it('renders and connects each panel with aria-labelledby', () => {
            getAllPanels().forEach((element, index) => {
                expect(element).toHaveAttribute(
                    'aria-labelledby',
                    getTab(index).id,
                );
            });
        });
    });

    describe('Custom properties', () => {
        beforeEach(() =>
            renderTabs({
                props: { orientation: ORIENTATION_VERTICAL },
                propsTab: { haspopup: true },
            }),
        );

        it('renders tab list with aria-orientation vertical', () => {
            expect(getList()).toHaveAttribute(
                'aria-orientation',
                ORIENTATION_VERTICAL,
            );
        });

        it('renders each tab with aria-haspopup', () => {
            getAllTabs().forEach((element) => {
                expect(element).toHaveAttribute('aria-haspopup', 'true');
            });
        });
    });

    describe('States', () => {
        beforeEach(() => renderTabs());

        it('renders each tab with aria-selected', () => {
            getAllTabs().forEach((element, index) => {
                expect(element).toHaveAttribute(
                    'aria-selected',
                    index === tab ? 'true' : 'false',
                );
            });
        });

        it('renders each tab with aria-hidden', () => {
            getAllPanels().forEach((element, index) => {
                expect(element).toHaveAttribute(
                    'aria-hidden',
                    index === tab ? 'false' : 'true',
                );
            });
        });

        it('hides each panel not selected', () => {
            expect(getAllPanels()).toHaveLength(tabs);
            expect(getAllPanels(false)).toHaveLength(1);
        });
    });
});
