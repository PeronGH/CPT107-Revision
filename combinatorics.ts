import { Input } from 'https://deno.land/x/cliffy@v0.25.6/mod.ts';

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

// Command line interface

console.log(`Type command: <mode> <n> <r>

Modes:
    pr - Permutations with repetitions
    pn - Permutations without repetitions
    cr - Combinations with repetitions
    cn - Combinations without repetitions
     ! - Factorial
     q - Quit
`);

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

let line = '';

while (
    (line = await Input.prompt({
        message: '',
        suggestions: Object.keys(commands),
        prefix: '',
    })) !== 'q'
) {
    const [mode, n, r] = line.split(' ');
    if (mode in commands) {
        commands[mode](n, r);
    }
}
