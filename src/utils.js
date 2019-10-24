export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export function randomTrueOrFalse() {
    return Math.random() >= 0.2;
};