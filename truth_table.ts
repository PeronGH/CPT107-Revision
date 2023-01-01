import { Table, Input } from 'https://deno.land/x/cliffy@v0.25.6/mod.ts';
import { evaluate, preprocessExpression } from './propositional_logic.ts';

function generateTruthTable(expressions: string[]): string[][] {
    const result: string[][] = [];

    // preprocess expressions
    expressions.forEach((expression, index) => {
        expressions[index] = preprocessExpression(expression);
    });

    const variables = new Set<string>();
    const values = new Map<string, boolean>();

    // initialize variables
    for (const expression of expressions) {
        for (const char of expression) {
            if (/[a-z]/i.test(char)) {
                variables.add(char);
            }
        }
    }

    const variableArray = [...variables].sort((a, b) => -a.localeCompare(b));

    // add variable to expressions if it is not present
    for (const variable of variableArray) {
        if (!expressions.includes(variable)) {
            // insert the variable at the beginning of the expression
            expressions = [variable, ...expressions];
        }
    }

    // generate truth table header
    result.push(
        expressions.map(expression =>
            expression
                .replaceAll('∧', ' ∧ ')
                .replaceAll('∨', ' ∨ ')
                .replaceAll('→', ' → ')
                .replaceAll('≡', ' ≡ ')
        )
    );

    // generate truth table body

    for (let i = 0; i < 2 ** variableArray.length; i++) {
        for (let j = 0; j < variableArray.length; j++) {
            values.set(variableArray[j], (i >> j) % 2 === 1);
        }

        const row = [];
        for (const expression of expressions) {
            row.push(evaluate(expression, values).toString());
        }
        result.push(row);
    }

    return result;
}

// Command line interface
console.log(`Type expressions, separated by , or ;, or press enter to quit:\n`);

let line: string | null = null;

while ((line = await Input.prompt({ message: '', prefix: '' }))) {
    const expressions = line.split(/[;,]/).map(expression => expression.trim());

    try {
        new Table(...generateTruthTable(expressions)).border(true).render();
    } catch (e) {
        console.log(e);
    }
}
