function factorial(n: number): number {
    return n > 0 ? n * factorial(n - 1) : 1;
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

console.log(`Welcome!
Type a command to get started.
Basic structure: <mode> <n> <r>

Modes:
    pwr - Permutations with repetitions
    pnr - Permutations without repetitions
    cwr - Combinations with repetitions
    cnr - Combinations without repetitions
`);
// Command line interface
while (true) {
    const [mode, n, r] = prompt('> ')!.split(/\s+/);
    if (mode === 'q') {
        break;
    } else if (mode === 'pwr') {
        console.log(Permutations.withRepetitions(parseInt(n), parseInt(r)));
    } else if (mode === 'pnr') {
        console.log(Permutations.withoutRepetitions(parseInt(n), parseInt(r)));
    } else if (mode === 'cwr') {
        console.log(Combinations.withRepetitions(parseInt(n), parseInt(r)));
    } else if (mode === 'cnr') {
        console.log(Combinations.withoutRepetitions(parseInt(n), parseInt(r)));
    } else {
        console.log('Invalid command');
    }
}
