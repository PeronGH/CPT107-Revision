function generateTruthTable(expressions: string[]) {
    // First, we need to determine the number of variables in the expressions.
    // We'll use a Set to store the unique variables, and a Map to store
    // the truth values for each variable at each row of the table.
    const variables = new Set<string>();
    const variableValues = new Map<string, boolean>();

    // Next, we'll parse the expressions to extract the variables and create
    // the header row of the table.
    console.log(
        '| ' +
            expressions
                .map(expression =>
                    expression
                        .replaceAll('||', '∨')
                        .replaceAll('&&', '∧')
                        .replaceAll('!', '¬')
                )
                .join(' | ') +
            ' |'
    );
    console.log('|-' + '-|-'.repeat(expressions.length - 1) + '-|');
    expressions.forEach(expression => {
        // Use a regular expression to match all the variables in the expression.
        const matches = expression.match(/[a-z]/gi);
        if (matches) {
            matches.forEach(variable => variables.add(variable));
        }
    });

    // Now we'll iterate through all the possible truth values for the variables,
    // using a recursive function to handle the case where there are more than 2 variables.
    function iterate(remainingVariables: string[]) {
        if (remainingVariables.length === 0) {
            // When there are no more variables to iterate through, we can evaluate
            // the expressions and print the row of the truth table.
            const row = expressions.map(expression => {
                // Replace the variables in the expression with their truth values.
                let evaluated = expression;
                Array.from(variables).forEach(variable => {
                    evaluated = evaluated.replace(
                        new RegExp(variable, 'gi'),
                        variableValues.get(variable)!.toString()
                    );
                });

                // Evaluate the expression using the JavaScript eval function.
                // This is not recommended for production code, as it can be
                // vulnerable to injection attacks.
                return eval(evaluated);
            });
            console.log('| ' + row.join(' | ') + ' |');
        } else {
            // Set the first variable to true and iterate through the rest.
            variableValues.set(remainingVariables[0], true);
            iterate(remainingVariables.slice(1));

            // Set the first variable to false and iterate through the rest.
            variableValues.set(remainingVariables[0], false);
            iterate(remainingVariables.slice(1));
        }
    }
    iterate(Array.from(variables));
}

// Command line interface
console.log(`Type expressions, separated by , or ;, or press enter to quit:\n`);

while (true) {
    const expressions = prompt('>')
        ?.split(/[;,]/)
        .map(expression => expression.trim());

    if (expressions === undefined) break;

    console.log();
    try {
        generateTruthTable(expressions);
    } catch {
        console.log('Invalid expression');
    }
    console.log();
}
