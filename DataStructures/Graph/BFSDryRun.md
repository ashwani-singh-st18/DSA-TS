# BFS (Breadth-First Search) - Dry Run

## Code Implementation

```typescript
while(queue.length > 0){
    const vertex = queue.shift()!;
    console.log(vertex)

    const neighbors = this.adjacencyList.get(vertex);

    for(const neighbor of neighbors!){
        if(!visited.has(neighbor)){
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
}
```

## Initial Setup

Before this while loop starts, we already did:

```typescript
visited.add(start);
queue.push(start);
```

**Initial state:**
- `visited = { A }`
- `queue = [ A ]`

**Graph structure used:**
```
A → B, C
B → A, D
C → A, D
D → B, C
```

---

## Line-by-Line Explanation

### 1️⃣ `while(queue.length > 0)`

**Meaning:** "Keep running until queue becomes empty."

- If queue is empty → traversal is finished

### 2️⃣ `const vertex = queue.shift()!;`

**What does `shift()` do?**
- Removes first element from array
- Queue works as **FIFO** (First In First Out)

**Example:**
```
queue = [A, B, C]
shift() removes A → queue becomes [B, C]
```

**What is `!` here?**
- `shift()` can return `undefined`
- We are 100% sure queue is not empty (because of while condition)
- `!` tells TypeScript: "Trust me, this is not undefined"

### 3️⃣ `console.log(vertex)`

Print the current node. This means we are **VISITING** this vertex.

### 4️⃣ `const neighbors = this.adjacencyList.get(vertex);`

Gets all connected nodes.

**Example:**
```
If vertex = A
neighbors = ["B", "C"]
```

### 5️⃣ `for(const neighbor of neighbors!)`

Loop through each neighbor. Again `!` means neighbors is not undefined.

### 6️⃣ `if(!visited.has(neighbor))`

**Important part:**
- Check: Have we already visited this node?
  - If YES → skip
  - If NO → add to queue

### 7️⃣ `visited.add(neighbor);`

Mark it visited **immediately**.

**Very important:**
- We mark visited **when pushing to queue**, NOT when removing
- This prevents duplicates from entering the queue

### 8️⃣ `queue.push(neighbor);`

Add to queue to visit later.

---

## Full Dry Run (Step-by-Step)

### ✅ Initial State
```
visited = {A}
queue = [A]
```

### 🔁 Iteration 1

**Condition:** `queue.length > 0` → true

**Step 1 - Remove from queue:**
```
vertex = A
queue = [B, C]
```
**Print:** A

**Step 2 - Process neighbors:**
```
neighbors = ["B", "C"]
```

**Neighbor B:**
- `visited.has(B)` → false
- Add it: `visited = {A, B}`
- Push: `queue = [B]`

**Neighbor C:**
- `visited.has(C)` → false
- Add it: `visited = {A, B, C}`
- Push: `queue = [B, C]`

### 🔁 Iteration 2

```
queue = [B, C]
vertex = B
queue = [C]
```
**Print:** B

**Process neighbors:** `["A", "D"]`
- **A** → already visited, skip
- **D** → not visited, add
  - `visited = {A, B, C, D}`
  - `queue = [C, D]`

### 🔁 Iteration 3

```
vertex = C
queue = [D]
```
**Print:** C

**Neighbors:** `["A", "D"]` → Both already visited, skip

### 🔁 Iteration 4

```
vertex = D
queue = []
```
**Print:** D

**Neighbors:** `["B", "C"]` → Both visited, skip

### 🔁 Iteration 5

```
queue = []
```
**Condition fails** → Loop stops

### ✅ Final Output Order
```
A
B
C
D
```

---

## Conceptual Understanding

### 🔥 BFS Works Like Waves

```
Level 0: A
Level 1: B, C
Level 2: D
```

Queue ensures:
1. Visit A first
2. Then its neighbors (B, C)
3. Then their neighbors (D)

### 💡 Why Mark Visited Before Push?

**What if we did:**
```typescript
queue.push(neighbor);
visited.add(neighbor);
```

This could cause duplicates if two nodes push the same neighbor before marking visited.

**Best practice:** Mark visited immediately when adding to queue.

### 🧠 Memory Trick

Think of queue like a **movie ticket counter line** 🎟️

- First person enters line → first served
- New people join at the end
- Nobody cuts the line
