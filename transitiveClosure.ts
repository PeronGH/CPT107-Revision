type Edge = [string, string];
type TransitiveClosure = Map<string, Set<string>>;

function transitiveClosure(edges: Edge[]): TransitiveClosure {
    // Create a map to store the transitive closure
    const closure = new Map<string, Set<string>>();

    // Initialize the transitive closure with the edges themselves
    for (const [from, to] of edges) {
        if (!closure.has(from)) {
            closure.set(from, new Set<string>());
        }
        closure.get(from)!.add(to);
    }

    // Add the transitive edges to the transitive closure
    for (const [from, to] of edges) {
        for (const [intermediate, _] of closure) {
            if (closure.get(intermediate)!.has(from)) {
                closure.get(intermediate)!.add(to);
            }
        }
    }

    return closure;
}

// Example usage
const edges: Edge[] = [
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'd'],
    ['b', 'a'],
];
const closure = transitiveClosure(edges);
console.log(closure);
