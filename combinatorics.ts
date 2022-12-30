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

console.log(`Type command: <mode> <n> <r>

Modes:
    pwr - Permutations with repetitions
    pnr - Permutations without repetitions
    cwr - Combinations with repetitions
    cnr - Combinations without repetitions
    !   - Factorial
    q   - Quit
`);
// Command line interface
const commands: { [mode: string]: (n: string, r: string) => void } = {
    pwr: (n, r) =>
        console.log(Permutations.withRepetitions(parseInt(n), parseInt(r))),
    pnr: (n, r) =>
        console.log(Permutations.withoutRepetitions(parseInt(n), parseInt(r))),
    cwr: (n, r) =>
        console.log(Combinations.withRepetitions(parseInt(n), parseInt(r))),
    cnr: (n, r) =>
        console.log(Combinations.withoutRepetitions(parseInt(n), parseInt(r))),
    '!': n => console.log(factorial(parseInt(n))),
};

while (true) {
    const [mode, n, r] = prompt('>')!.split(/\s+/);
    if (mode === 'q') {
        break;
    } else if (mode in commands) {
        commands[mode](n, r);
    } else {
        console.log('Invalid command');
    }
}
