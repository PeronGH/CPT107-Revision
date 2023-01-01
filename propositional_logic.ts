import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

export function evaluate(expression: string, values: Map<string, boolean>) {
    return evaluatePropositionalLogicRPN(
        parsePropositionalLogicRPN(expression),
        values
    );
}

export function preprocessExpression(expression: string) {
    expression = expression
        .replaceAll('and', '∧')
        .replaceAll('or', '∨')
        .replaceAll('not', '¬')
        .replaceAll('imply', '→')
        .replaceAll('equal', '≡')
        .replaceAll('!', '¬')
        .replaceAll('~', '¬')
        .replaceAll('&', '∧')
        .replaceAll('|', '∨')
        .replaceAll('->', '→')
        .replaceAll('=', '≡')
        .replaceAll('↔', '≡')
        .replaceAll(/\s/g, '');

    // replace 𝑎 to 𝑧 with a to z
    for (let i = 0; i < 26; i++) {
        expression = expression.replaceAll(
            String.fromCharCode(55349 + i),
            String.fromCharCode(97 + i)
        );
    }

    return expression;
}

const Tokens = {
    isOperator: (token: string) => ['¬', '∧', '∨', '→', '≡'].includes(token),
    isOperand: (token: string) => /[a-z]/i.test(token),
    getPrecedence(token: string) {
        switch (token) {
            case '¬':
                return 3;
            case '∧':
                return 2;
            case '∨':
                return 2;
            case '→':
                return 1;
            case '≡':
                return 0;
            default:
                throw new Error(`Invalid token: ${token}`);
        }
    },
};

// parse multiple kinds of propositional logic expressions into reverse polish notation
function parsePropositionalLogicRPN(expression: string): string[] {
    // parse expression into reverse polish notation
    const stack: string[] = [];
    const output: string[] = [];

    for (const char of expression) {
        if (Tokens.isOperand(char)) {
            output.push(char);
        } else if (Tokens.isOperator(char)) {
            while (
                stack.length > 0 &&
                Tokens.isOperator(stack[stack.length - 1]) &&
                Tokens.getPrecedence(char) <=
                    Tokens.getPrecedence(stack[stack.length - 1])
            ) {
                output.push(stack.pop()!);
            }
            stack.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack[stack.length - 1] !== '(') {
                output.push(stack.pop()!);
            }
            stack.pop();
        } else {
            throw new Error(`Invalid character: ${char}`);
        }
    }

    while (stack.length > 0) {
        output.push(stack.pop()!);
    }

    return output;
}

function evaluatePropositionalLogicRPN(
    rpn: string[],
    values: Map<string, boolean>
): boolean {
    const stack: boolean[] = [];

    for (const token of rpn) {
        if (Tokens.isOperand(token)) {
            stack.push(values.get(token)!);
        } else if (Tokens.isOperator(token)) {
            switch (token) {
                case '¬':
                    stack.push(!stack.pop()!);
                    break;
                case '∧':
                    stack.push(stack.pop()! && stack.pop()!);
                    break;
                case '∨':
                    {
                        const a = stack.pop()!;
                        const b = stack.pop()!;
                        stack.push(a || b);
                    }
                    break;

                case '→':
                    {
                        const a = stack.pop()!;
                        const b = stack.pop()!;
                        stack.push(!b || a);
                    }
                    break;
                case '≡':
                    stack.push(stack.pop()! === stack.pop()!);
                    break;
            }
        } else {
            throw new Error(`Invalid token: ${token}`);
        }
    }
    return stack.pop()!;
}

Deno.test('parse RPN', () => {
    assertEquals(parsePropositionalLogicRPN(preprocessExpression('p and q')), [
        'p',
        'q',
        '∧',
    ]);
    assertEquals(
        parsePropositionalLogicRPN(preprocessExpression('!p | (p & q)')),
        ['p', '¬', 'p', 'q', '∧', '∨']
    );
    assertEquals(parsePropositionalLogicRPN(preprocessExpression('p -> q')), [
        'p',
        'q',
        '→',
    ]);
    assertEquals(parsePropositionalLogicRPN(preprocessExpression('p = !q')), [
        'p',
        'q',
        '¬',
        '≡',
    ]);
    assertEquals(
        parsePropositionalLogicRPN(preprocessExpression('!p | q = p -> q')),
        ['p', '¬', 'q', '∨', 'p', 'q', '→', '≡']
    );
});

Deno.test('evaluate RPN', () => {
    assertEquals(
        evaluatePropositionalLogicRPN(
            ['p', 'q', '∧'],
            new Map([
                ['p', true],
                ['q', false],
            ])
        ),
        false
    );
    assertEquals(
        evaluatePropositionalLogicRPN(
            ['p', 'q', '→'],
            new Map([
                ['p', true],
                ['q', false],
            ])
        ),
        false
    );
    assertEquals(
        evaluatePropositionalLogicRPN(
            ['p', 'q', '¬', '≡'],
            new Map([
                ['p', true],
                ['q', false],
            ])
        ),
        true
    );
    assertEquals(
        evaluatePropositionalLogicRPN(
            ['p', '¬', 'q', '∨', 'p', 'q', '→', '≡'],
            new Map([
                ['p', false],
                ['q', true],
            ])
        ),
        true
    );
});
