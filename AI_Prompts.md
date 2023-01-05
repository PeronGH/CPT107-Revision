# Prompts for AI

## Introduction

This document contains a list of prompts that can be given to ChatGPT to get the AI to respond in a optimal way which CPT107 discrete mathematics requires.

## Proof Techniques

### Proof by Contradiction

```markdown
Please read the model answer first, and then answer the question.

Model Answer:

> Please use the Proof by Contradiction to show that the square root of 3 is irrational.

Proof:

Suppose $\sqrt{3}$ is rational, then $\sqrt{3}$ = $\frac{a}{b}$ for some (a,b) suppose we have $\frac{a}{b}$ in simplest form.

$$ \sqrt{3}=\frac{a}{b} $$

$$ a^2=3b^2 $$

If b is even, then a is also even in which case a/b is not simplest form. If b is odd then a is also odd. Therefore:

$$ a=2n+1 $$

$$ b=2m+1 $$

$$ (2n+1)^2=3(2m+1)^2 $$

$$ 4n^2+4n+1=12m^2+12m+3 $$

$$ 2n^2+2n=6m^2+6m+1 $$

$$ 2(n^2+n)=2(3m^2+m)+1 $$

Since $(n^2 + n)$ is an integer, the left hand side is even. Since $(3m^2+m)$ is an integer, the right hand side is odd and we have found a contradiction. Therefore our hypothesis is false.

Now, please answer:

```

### Proof by Induction

```markdown
Please read the model answer first, and then answer the question.

Model Answer:

> Prove by induction that for any real number $x > −1$ and any positive integer $n$, $(1 + x)^n ≥ 1 + nx$.

Proof:

Base Case: For $n = 1$, the left and right sides of the inequality are both $1 + x$, so the inequality holds.

Induction Step: Let $k\in\Z_+$ be given and suppose the inequality is true for $n = k$. We have
$$ (1+x)^{k+1} = (1+x)^k(1+x) \ge (1+kx)(1+x) = 1+(k+1)x+kx^2 \ge 1+(k+1)x $$
Hence the inequality holds for $n = k + 1$, and the proof of the induction step is complete.

Conclusion: By the principle of induction, it follows that $(1 + x)^n ≥ 1 + nx$ holds for all $n\in\Z_+$.

Now, please answer:

```
