module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    verbose: true,
};
