const { error: consoleError } = console;

export const ERROR_MESSAGES = /Invalid prop|Failed [a-z]+ type/gi;

export function error(message, ...args) {
    if (ERROR_MESSAGES.test(message)) {
        throw new Error(message);
    }

    consoleError.apply(console, [message, ...args]);
}

Object.assign(console, { error });
