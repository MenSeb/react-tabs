import { fireEvent } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';
import { ORIENTATION_VERTICAL as orientation } from 'utilities';
import { getPanel, getTab, renderTabs, tab, tabs } from './';

describe('Mouse interaction', () => {
    describe('When user click a tab', () => {
        it('focuses the tab and activates its associated tab panel', () => {
            renderTabs();

            expect(getTab()).not.toHaveFocus();
            expect(getPanel()).not.toBeVisible();

            userEvent.click(getTab());

            expect(getTab()).toHaveFocus();
            expect(getPanel()).toBeVisible();
        });
    });
});

describe('Keyboard interaction', () => {
    describe('When user press tab', () => {
        beforeEach(() => renderTabs());

        describe('When focus moves into the tab list', () => {
            it('moves focus to the active tab element', () => {
                expect(getTab(tab)).not.toHaveFocus();

                userEvent.tab();

                expect(getTab(tab)).toHaveFocus();
            });
        });

        describe('When the tab list contains the focus', () => {
            it('moves focus to the next element in the sequence, the tab panel itself', () => {
                userEvent.tab();
                userEvent.tab();

                expect(getPanel(tab)).toHaveFocus();
            });
        });
    });

    [specialChars.enter, specialChars.space].forEach((key) => {
        describe(`When user press ${key}`, () => {
            it('activates the associated tab panel', () => {
                renderTabs({ props: { automatic: false } });

                expect(getPanel()).not.toBeVisible();

                userEvent.type(getTab(), key);

                expect(getPanel()).toBeVisible();
            });
        });
    });

    describe('When user press home', () => {
        it('moves focus to the first tab', () => {
            renderTabs();

            expect(getTab()).not.toHaveFocus();

            userEvent.type(getTab(tab), specialChars.home);

            expect(getTab()).toHaveFocus();
        });
    });

    describe('When user press end', () => {
        it('moves focus to the last tab', () => {
            renderTabs();

            expect(getTab(tabs - 1)).not.toHaveFocus();

            userEvent.type(getTab(), specialChars.end);

            expect(getTab(tabs - 1)).toHaveFocus();
        });
    });

    describe('When user press delete', () => {
        beforeEach(() => renderTabs({ props: { removable: true } }));

        it('deletes (closes) the current tab element and its associated tab panel', () => {
            const currentTab = getTab(tab);
            const currentPanel = getPanel(tab);

            userEvent.type(currentTab, specialChars.delete);

            expect(currentTab).not.toBeInTheDocument();
            expect(currentPanel).not.toBeInTheDocument();
        });

        it('moves focus to the tab following the deleted tab', () => {
            const currentTab = getTab(tab);
            const nextTab = getTab(tab + 1);

            userEvent.type(currentTab, specialChars.delete);

            expect(nextTab).toHaveFocus();
        });

        it('moves focus to the tab preceding the deleted tab, if the last tab was deleted', () => {
            const currentTab = getTab(tabs - 1);
            const nextTab = getTab(tabs - 2);

            userEvent.type(currentTab, specialChars.delete);

            expect(nextTab).toHaveFocus();
        });

        it('moves focus to the next element in the sequence, if the last remaining tab was deleted', () => {
            for (let i = 0; i < tabs; i++) {
                userEvent.type(getTab(), specialChars.delete);
            }

            expect(document.body).toHaveFocus();
        });
    });

    describe('When user press arrow left', () => {
        describe('When focus is on a tab element in a horizontal tab list', () => {
            beforeEach(() => renderTabs());

            it('moves focus to the previous tab', () => {
                userEvent.type(getTab(tab), specialChars.arrowLeft);

                expect(getTab(tab - 1)).toHaveFocus();
            });

            it('moves focus to the last tab, if focus is on the first tab', () => {
                userEvent.type(getTab(), specialChars.arrowLeft);

                expect(getTab(tabs - 1)).toHaveFocus();
            });
        });

        describe('When focus is on a tab element in a vertical tab list', () => {
            it('keeps focus on the current tab', () => {
                renderTabs({ props: { orientation } });

                userEvent.type(getTab(tab), specialChars.arrowLeft);

                expect(getTab(tab)).toHaveFocus();
            });
        });
    });

    describe('When user press arrow right', () => {
        describe('When focus is on a tab element in a horizontal tab list', () => {
            beforeEach(() => renderTabs());

            it('moves focus to the next tab', () => {
                userEvent.type(getTab(tab), specialChars.arrowRight);

                expect(getTab(tab + 1)).toHaveFocus();
            });

            it('moves focus to the first tab, if focus is on the last tab', () => {
                userEvent.type(getTab(tabs - 1), specialChars.arrowRight);

                expect(getTab()).toHaveFocus();
            });
        });

        describe('When focus is on a tab element in a vertical tab list', () => {
            it('keeps focus on the current tab', () => {
                renderTabs({ props: { orientation } });

                userEvent.type(getTab(tab), specialChars.arrowRight);

                expect(getTab(tab)).toHaveFocus();
            });
        });
    });

    describe('When user press arrow up', () => {
        describe('When focus is on a tab element in a vertical tab list', () => {
            beforeEach(() => renderTabs({ props: { orientation } }));

            it('moves focus to the previous tab', () => {
                userEvent.type(getTab(tab), specialChars.arrowUp);

                expect(getTab(tab - 1)).toHaveFocus();
            });

            it('moves focus to the last tab, if focus is on the first tab', () => {
                userEvent.type(getTab(), specialChars.arrowUp);

                expect(getTab(tabs - 1)).toHaveFocus();
            });
        });

        describe('When focus is on a tab element in a horizontal tab list', () => {
            it('keeps focus on the current tab', () => {
                renderTabs();

                userEvent.type(getTab(tab), specialChars.arrowUp);

                expect(getTab(tab)).toHaveFocus();
            });
        });
    });

    describe('When user press arrow down', () => {
        describe('When focus is on a tab element in a vertical tab list', () => {
            beforeEach(() => renderTabs({ props: { orientation } }));

            it('moves focus to the next tab', () => {
                userEvent.type(getTab(tab), specialChars.arrowDown);

                expect(getTab(tab + 1)).toHaveFocus();
            });

            it('moves focus to the first tab, if focus is on the last tab', () => {
                userEvent.type(getTab(tabs - 1), specialChars.arrowDown);

                expect(getTab()).toHaveFocus();
            });
        });

        describe('When focus is on a tab element in a horizontal tab list', () => {
            it('keeps focus on the current tab', () => {
                renderTabs();

                userEvent.type(getTab(tab), specialChars.arrowDown);

                expect(getTab(tab)).toHaveFocus();
            });
        });
    });

    describe('When user press down a key', () => {
        it('does not trigger the action until the key is released', () => {
            renderTabs();

            userEvent.tab();

            expect(getTab(tab)).toHaveFocus();

            fireEvent.keyDown(getTab(tab), { key: 'ArrowRight' });
            fireEvent.keyDown(getTab(tab), { key: 'ArrowRight' });

            expect(getTab(tab)).toHaveFocus();

            fireEvent.keyUp(getTab(tab), { key: 'ArrowRight' });

            expect(getTab(tab + 1)).toHaveFocus();
        });
    });
});
