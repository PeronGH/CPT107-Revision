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
| Prime numbers    | No       | No          | No             | No       |
| Even numbers     | Yes      | Yes         | Yes            | No       |
| Odd numbers      | No       | No          | Yes            | No       |

## Proof Techniques

### Proof by Contradiction

#### Definition

If (¬p → false) is true, then p is true.

#### Steps

Assume ¬p and find contradiction.

### Proof by induction

#### Definition

Let P(n) be a predicate. If P(0) ∧ (∀n ∈ N, P(n) → P(n+1)) is true, then ∀n ∈ N, P(n) is true.

#### Steps

Base case ...

Induction step ...

## Set Theory

### Notation

- Set-Roster Notation eg. {0, 2, 4, 6, ...}
- Set-Builder Notation eg. {x | P(x)}

### Equality

Order and repetition do not matter

### Subset

If every element in A is also in B, then A ⊆ B.

### Operations

- **Union**: A ∪ B = {x | x ∈ A or x ∈ B}
- **Intersection**: A ∩ B = {x | x ∈ A and x ∈ B}
- **Relative complement**: A − B = {x | x ∈ A and x ∉ B}
- **Complement**: ∼ A = {x | x ∉ A} = U − A (U is the universal set)
- **Symmetric difference**: A ∆ B = {x | (x ∈ A and x ∉ B) or (x ∉ A and x ∈ B)}
- **Power set**: Pow(A) = {C |C ⊆ A}
- **Cartesian product**: A × B = {(a, b) | a ∈ A and b ∈ B}

### Algebra

- **Associative laws**
  - (A ∪ B) ∪ C = A ∪ (B ∪ C)
  - (A ∩ B) ∩ C = A ∩ (B ∩ C)

- **Commutative laws**
  - A ∪ B = B ∪ A
  - A ∩ B = B ∩ A

- **Identity laws**
  - A ∪ ∅ = A
  - A ∩ U = A

- **Distributive laws**
  - A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  - A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

- **Complement laws**
  - A ∪ ∼ A = U
  - A ∩ ∼ A = ∅
  - ∼ (∼ A) = A
  - ∼ ∅ = U
  - ∼ U = ∅

- **De Morgan's laws**
  - ∼ (A ∪ B) = ∼ A ∩ ∼ B
  - ∼ (A ∩ B) = ∼ A ∪ ∼ B

### Cardinality

#### Definition

The cardinality of a finite set S is the number of elements in S, and is denoted by |S|.

#### Computation

- **Union of two sets**: |A ∪ B| = |A| + |B| − |A ∩ B|
- **Union of three sets**: |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|
- **Power set of a set**: |Pow(A)| = |A| * |A + 1| / 2 + 1
- **Cartesian product**: |A × B| = |A| * |B|

### Bit String

#### Definition

A sequence of bits (binary digits), which can be either 0 or 1.

#### Characteristic Vectors

A characteristic vector is a way of representing a subset of a larger set using bit string. The length of the characteristic vector is equal to the number of elements in the larger set, and each element is represented by a single bit. If the bit corresponding to an element is 1, it means that the element is in the subset; if the bit is 0, it means that the element is not in the subset.

## Relations

### Definition

#### Binary Relation

A binary relation R from a set A to a set B is a subset of A × B, denoted as <u>R ⊆ A × B</u>.

#### Unary Relation

Unary relations are just subsets of a set.

### Notation

#### Symbols

<u>(a, b) ∈ R</u> can be denoted as <u>a R b</u>, which is a predicate that a is R-related to b.

#### Directed Graphs

- Let A and B be two finite sets and R a binary relation between these two sets (i.e., R ⊆ A × B).
- We represent the elements of these two sets as vertices of a graph.
- For each (a, b) ∈ R, we draw an arrow linking the related elements.
- This is called the directed graph (or digraph) of R.

#### Matrices

- Another way of representing a binary relation between finite sets uses an array.

- Let A = {a1, . . . , an}, B = {b1, . . . , bm} and R ⊆ A × B. We represent R by an array M of n rows and m columns.

- Such an array is called a n by m matrix.

- The entry in row i and column j of this matrix is given by M(i, j) where
  $$
  \begin{equation}
  M(i,j)=
      \begin{cases}
          T & \text{if } & (a_i, b_j) \in R\\
          F & \text{if } & (a_i, b_j) \notin R
      \end{cases}
  \end{equation}
  $$
  
