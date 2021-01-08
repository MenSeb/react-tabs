import userEvent from '@testing-library/user-event';
import { getAllPanels, getPanel, getTab, getTabs, renderTabs, tab } from '../';
import { ORIENTATION_VERTICAL as orientation } from 'utilities';

describe('<TabsProvider />', () => {
    it('renders with children', () => {
        renderTabs();

        expect(getTabs()).not.toBeEmptyDOMElement();
    });

    it('renders the active panel using the tab index provided', () => {
        renderTabs();

        expect(getPanel(tab)).toBeVisible();
    });

    describe('When automatic is false', () => {
        it('keeps the active panel when user uses navigation keys', () => {
            renderTabs({ props: { automatic: false } });

            expect(getPanel(tab)).toBeVisible();

            userEvent.type(getTab(tab), '{arrowright}');

            expect(getPanel(tab)).toBeVisible();
        });
    });

    describe('When optimise is true', () => {
        it('renders only the active panel', () => {
            renderTabs({ props: { optimise: true } });

            expect(getAllPanels()).toHaveLength(1);
        });
    });

    describe('When override is true and orientation horizontal', () => {
        beforeEach(() => renderTabs({ props: { override: true } }));

        describe('When user press arrow down', () => {
            it('moves focus to the next tab', () => {
                userEvent.type(getTab(tab), '{arrowdown}');

                expect(getTab(tab + 1)).toHaveFocus();
            });
        });

        describe('When user press arrow up', () => {
            it('moves focus to the previous tab', () => {
                userEvent.type(getTab(tab), '{arrowup}');

                expect(getTab(tab - 1)).toHaveFocus();
            });
        });
    });

    describe('When override is true and orientation vertical', () => {
        beforeEach(() =>
            renderTabs({ props: { orientation, override: true } }),
        );

        describe('When user press arrow right', () => {
            it('moves focus to the next tab', () => {
                userEvent.type(getTab(tab), '{arrowright}');

                expect(getTab(tab + 1)).toHaveFocus();
            });
        });

        describe('When user press arrow left', () => {
            it('moves focus to the previous tab', () => {
                userEvent.type(getTab(tab), '{arrowleft}');

                expect(getTab(tab - 1)).toHaveFocus();
            });
        });
    });
});
