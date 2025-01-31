# Programming II

JavaScript | [Mozilla JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## **Session 1: Review of Programming I Basics**  
**Content**:
- JavaScript syntax refresher: `let` vs `const`, arrow functions, template literals.
- Data structures: Arrays, objects, `Map`, `Set`.
- Control flow: `for`, `while`, `switch`, ternary operators.
- Problem-solving techniques: Writing pseudoscript, creating flowcharts.

**Objective**:
- Strengthen foundational JavaScript skills.
- Translate real-world problems into structured logic.

**Exercises**:
1. Write a function `findDuplicates(arr)` that returns an array of duplicate elements.
2. Create a flowchart for a thermostat system that adjusts temperature based on user input.
3. S  m](https://leetcode.com/problems/two-sum/) using nested loops (O(n²)) and then optimize it using a `Map` (O(n)).
4. Implement a `Student` class with properties (name, grades) and methods to calculate final grade.

**Resources**:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) 
- [Pseudoscript](https://github.com/jorgealves/pseudoscript)

---

## **Session 2: Algorithm Complexity & Big O Notation**
**Content**:
- Time vs. space complexity: Definitions and trade-offs.
- Big O rules: Drop constants, dominant terms, worst-case analysis.
- Analyzing loops: Single loops, nested loops, sequential operations.
- Common complexities: O(1), O(n), O(n²), O(log n).

**Objective**:
- Quantify algorithm efficiency using Big O.
- Compare solutions based on scalability.

**Exercises**:  
1. Calculate the time complexity of this code:
```javascript
const n = 1_000_000;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
   console.log(i + j);
  }
}
```
2. Write a function to find the maximum product of two numbers in an array. Compare the complexity of a brute-force approach vs. a sorted array approach.
3. Solve [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) with O(n) time and O(n) space.
4. Explain why O(2n + 5) simplifies to O(n).

**Resources:**
[Big O Cheat Sheet](https://www.bigocheatsheet.com/)

## Session 3: Recursion & Complexity Analysis

**Content:**

- Recursion basics: Base case, recursive case, call stack.
- Recursion vs. iteration: When to use each.
- Tail recursion and stack overflow prevention.
- Recurrence relations for complexity (e.g., Fibonacci: T(n) = T(n-1) + T(n-2) + O(1)).

**Objective:**
- Solve problems recursively and analyze recursive complexity.

**Exercises:**

- Write a recursive `power(x, n)` function (calculate x^n).
- Solve [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) using recursion, then memoization.
- Print all permutations of a string using backtracking.
- Explain why the recursive Fibonacci has O(2^n) time complexity.

**Resources:**

- [MDN Recursion Guide](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

## Session 4: Divide & Conquer Algorithms

**Content:**

- Divide & conquer steps: Split, solve subproblems, combine results.
- Merge Sort: Implementation, stability, O(n log n) analysis.
- Quick Sort: Pivot selection, partitioning, average vs. worst case.
- Binary Search variations: Find first/last occurrence, count duplicates.

**Objective:**

- Implement divide-and-conquer algorithms and analyze their efficiency.

**Exercises:**

- Code Quick Sort with a pivot strategy of your choice.
- Solve [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/).
- Implement a function to count inversions in an array (modified Merge Sort).
- Explain why Merge Sort is preferred over Quick Sort for linked lists.

**Resources:**

- [Visualizing Sorting Algorithms](https://visualgo.net/en/sorting)

## Session 5: Problem-Solving Lab I

**Content:**

- Optimization strategies: Precomputation, caching, early termination.
- Space-time trade-offs: Using hash maps vs. brute force.

**Exercises:**

- Solve [Rotate Image](https://leetcode.com/problems/rotate-image/) (rotate a matrix 90 degrees in-place).
- Find the longest palindrome substring in a string (brute-force → optimized).
- Write a function to compute the intersection of two arrays (O(n) time).
- Given a matrix of 0s and 1s, find the largest square of 1s (dynamic programming preview).

## Session 6: Greedy Algorithms

**Content:**

- Greedy properties: Optimal substructure, greedy choice.
- Applications: Scheduling, Huffman coding, fractional knapsack.
- Limitations: When greedy fails (e.g., 0/1 knapsack).

**Exercises:**

- Solve [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) using Kadane’s algorithm.
- Implement the activity selection problem (select max non-overlapping intervals).
- Design a greedy algorithm for the coin change problem (when coins are canonical, e.g., [1, 5, 10]).
- Explain why Dijkstra’s algorithm is greedy.

## Session 7-8: Dynamic Programming (I & II)

**Content:**

- DP principles: Overlapping subproblems, optimal substructure.
- Memoization: Top-down approach with closures.
- Tabulation: Bottom-up approach with matrix/array.
- Classic problems: Knapsack, LCS, edit distance.

**Exercises:**

- Solve [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) with memoization and tabulation.
- Implement the 0/1 knapsack problem.
- Solve [Longest Increasing Subsequence.](https://leetcode.com/problems/longest-increasing-subsequence/)
- Optimize space for Fibonacci tabulation to use only two variables.

## Session 10-11: Graph Algorithms (I & II)

**Content:**

- Graph representations: Adjacency list vs. matrix.
- BFS/DFS: Iterative vs. recursive implementations.
- Shortest path: Dijkstra (non-negative weights), Bellman-Ford (negative weights).
- Topological sorting: Kahn’s algorithm, DFS-based.

**Exercises:**

- Implement BFS to find the shortest path in an unweighted graph.
- Detect cycles in an undirected graph using DFS.
- Solve [Network Delay Time](https://leetcode.com/problems/network-delay-time/) (Dijkstra’s algorithm).
- Find the number of connected components in a graph.

## Session 13: Advanced Sorting & Searching

**Content:**

- Heap Sort: Binary heap structure, heapify operation.
- Radix Sort: LSD (Least Significant Digit) implementation.
- Searching: Interpolation search (for uniformly distributed data).

**Exercises:**

- Implement Heap Sort using a max-heap.
- Solve [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) using binary search.
- Compare the performance of Radix Sort vs. Quick Sort on an array of 10,000 integers.

## Session 14: Backtracking

**Exercises:**

- Solve [Subsets](https://leetcode.com/problems/subsets/) (all possible subsets).
- Generate all permutations of an array with duplicates.
- Solve [Sudoku Solver.](https://leetcode.com/problems/sudoku-solver/)

## Session 15: Sliding Window & Two-Pointer

**Exercises:**

- Solve Longest Repeating Character Replacement.
- Find the smallest subarray with a sum ≥ target (variable-size window).
- Remove duplicates from a sorted array in-place (two-pointer).

## Session 16: Bit Manipulation

**Exercises:**

- Reverse the bits of a 32-bit integer.
- Check if a number is a power of two using bitwise operations.
- Implement a function to add two numbers without using +.

## Session 17-18: Problem-Solving Labs & Mock Exam

**Exercises:**

- Solve Word Break II (backtracking + memoization).
- Mock exam: Solve Merge Intervals, Coin Change, and Course Schedule II in 2 hours.

## Session 19: Final Project

**Requirements:**

- Build a project using 2+ algorithms (e.g., pathfinding visualizer, sorting algorithm comparator).
- Include a complexity analysis report.
- Example: Visualize BFS/DFS traversal on a grid using HTML Canvas.

**Additional Resources**

- Books:
    - Grokking Algorithms by Aditya Bhargava (visual explanations).
    - Eloquent JavaScript by Marijn Haverbeke (free online).

- Tools:
    - LeetCode for coding practice.
    - JSFiddle for quick JavaScript prototyping.

---

### Key Improvements:  

1. **Explicit Content**: Each session now includes subtopics (e.g., for recursion: base cases, tail recursion, recurrence relations).  
2. **More Exercises**: 3-4 exercises per session, ranging from implementation to analysis.  
3. **Progression**: Exercises build from basic to advanced (e.g., Fibonacci → memoization → DP).  
4. **Real-World Links**: LeetCode problems and Mozilla documentation are hyperlinked.  
