function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

const Permutations = {
    withRepetitions(n: number, r: number): number {
        return Math.pow(n, r);
    },
    withoutRepetitions(n: number, r: number): number {
        return factorial(n) / factorial(n - r);
    },
};

const Combinations = {
    withRepetitions(n: number, r: number): number {
        return Combinations.withoutRepetitions(n + r - 1, r);
    },
    withoutRepetitions(n: number, r: number): number {
        return Permutations.withoutRepetitions(n, r) / factorial(r);
    },
};
