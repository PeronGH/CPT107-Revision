function factorial(n: number): number {
    if (n < 0) throw new Error('factorial: n must be non-negative');
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
    pr - Permutations with repetitions
    pn - Permutations without repetitions
    cr - Combinations with repetitions
    cn - Combinations without repetitions
     ! - Factorial
     q - Quit
`);
// Command line interface
const commands: { [mode: string]: (n: string, r: string) => void } = {
    pr: (n, r) =>
        console.log(
            `${n}^${r} =`,
            Permutations.withRepetitions(parseInt(n), parseInt(r))
        ),
    pn: (n, r) =>
        console.log(
            `${n}! / (${n} - ${r})! =`,
            Permutations.withoutRepetitions(parseInt(n), parseInt(r))
        ),
    cr: (n, r) =>
        console.log(
            `(${n} + ${r} - 1)! / (${n} - 1)! / ${r}! =`,
            Combinations.withRepetitions(parseInt(n), parseInt(r))
        ),
    cn: (n, r) =>
        console.log(
            `${n}! / (${n} - ${r})! / ${r}! =`,
            Combinations.withoutRepetitions(parseInt(n), parseInt(r))
        ),
    '!': n => console.log(factorial(parseInt(n))),
};

while (true) {
    const [mode, n, r] = prompt('>')!.split(/\s+/);
    if (mode === 'q') {
        break;
    } else if (mode in commands) {
        try {
            commands[mode](n, r);
        } catch (error) {
            console.log(error.message);
        }
    } else {
        console.log('Invalid command');
    }
}
