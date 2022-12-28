# CPT107 Revision

## Number Systems

### Brief Description

* **Natural numbers**: These are the numbers that we use to count things. They are also known as the counting numbers and are denoted by the symbol N. The natural numbers are 1, 2, 3, 4, 5, 6, etc.
* **Integers**: These are the numbers that include the natural numbers, their negatives, and zero. They are denoted by the symbol Z. The integers are ..., -3, -2, -1, 0, 1, 2, 3, ...
* **Rational numbers**: These are numbers that can be expressed as the ratio of two integers. They are denoted by the symbol Q. Examples of rational numbers include 1/2, 3/4, 5/6, etc.
* **Real numbers**: These are numbers that can be represented on a number line. They include all of the rational numbers as well as some numbers that cannot be expressed as the ratio of two integers (such as the square root of 2 or pi). They are denoted by the symbol R.
* **Prime numbers**: These are numbers that are divisible only by 1 and themselves. The first few prime numbers are 2, 3, 5, 7, 11, etc.
* **Even numbers**: These are numbers that are divisible by 2. Examples of even numbers include 2, 4, 6, 8, 10, etc.
* **Odd numbers**: These are numbers that are not divisible by 2. Examples of odd numbers include 1, 3, 5, 7, 9, etc.



Here is a table that lists the various sets of numbers and whether they are closed under various operations:

| Set of Numbers   | Addition | Subtraction | Multiplication | Division |
| ---------------- | -------- | ----------- | -------------- | -------- |
| Natural numbers  | Yes      | Yes         | Yes            | No       |
| Integers         | Yes      | Yes         | Yes            | No       |
| Rational numbers | Yes      | Yes         | Yes            | Yes      |
| Real numbers     | Yes      | Yes         | Yes            | Yes      |
| Prime numbers    | Yes      | Yes         | Yes            | No       |
| Even numbers     | Yes      | Yes         | Yes            | No       |
| Odd numbers      | Yes      | Yes         | Yes            | No       |

## Proof Techniques

### Proof by Contradiction

$$
\text{if } (\neg p \to false) \text{ is } ture \text{, then } p \text{ is } true \text{.}
$$

Steps: Assume ¬p and find contradiction.

### Proof by induction

$$
\text{Let } P(n) \text{ be a predicate. if } P(0) \text{ is } true \text{, and } \forall n \in N \text{, } P(n) \to P(n+1) \text{ is true, then } \forall n \in N \text{, } P(n) \text{ is } true.
$$

Steps:

Base case ...

Induction step ...

## Set Theory

### Notation

- Set-Roster Notation eg. {0, 2, 4, 6, ...}
- Set-Builder Notation eg. {x | P(x)}

### Equality

Order and repeatition do not matter

### Subset

if every element in A is also in B, then A ⊆ B.

### Operations

- **Union**: A ∪ B = {x | x ∈ A or x ∈ B}
- **Intersection**: A ∩ B = {x | x ∈ A and x ∈ B}.
- **Relative complement**: A − B = {x | x ∈ A and x ∉ B}.
- **Complement**: ∼ A = {x | x ∉ A} = U − A. (U is the universal set)
- **Symmetric difference**: A ∆ B = {x | (x ∈ A and x ∉ B) or (x ∉ A and x ∈ B)}.
- **Power set**: The power set of a set A is the set of all subsets of A. It is denoted as P(A). For example, if A = {1, 2}, then P(A) = {{}, {1}, {2}, {1, 2}}.
- **Cartesian product**: The Cartesian product of two sets A and B is the set of all ordered pairs (a, b) where a belongs to A and b belongs to B. It is denoted as A × B. For example, if A = {1, 2} and B = {3, 4}, then A × B = {(1, 3), (1, 4), (2, 3), (2, 4)}.

### Algebra

- **Associative laws**

  These laws involve rearranging the grouping of elements in a set operation. For example, the following two set operations are equivalent:

  - (A ∪ B) ∪ C = A ∪ (B ∪ C)
  - (A ∩ B) ∩ C = A ∩ (B ∩ C)

- **Commutative laws**

  These laws involve rearranging the order of the sets in a set operation. For example, the following two set operations are equivalent:

  - A ∪ B = B ∪ A
  - A ∩ B = B ∩ A

- **Identity laws**

  These laws involve the empty set and the universal set. For example:

  - A ∪ ∅ = A
  - A ∩ U = A

- **Distributive laws**

  These laws involve distributing one set operation over another. For example:

  - A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  - A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

- **Complement laws**

  These laws involve the complement of a set. For example:

  - A ∪ ∼ A = U
  - A ∩ ∼ A = ∅
  - ∼ (∼ A) = A
  - ∼ ∅ = U
  - ∼ U = ∅

- **De Morgan's laws**

  These laws involve the complement of a set and the set operations of union and intersection. For example:

  - ∼ (A ∪ B) = ∼ A ∩ ∼ B
  - ∼ (A ∩ B) = ∼ A ∪ ∼ B
