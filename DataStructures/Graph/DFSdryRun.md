# 🚀 DFS Dry Run - Full Step by Step

Starting DFS from node **"A"**

---

## ✅ Initial State
```
visited = {}
```

**Call:** `dfsHelper("A")`

---

## 🔵 Step 1 → Visit A

- **visited:** `{ A }`
- **Action:** Print A

**Neighbors of A:** `[B, C]`

- First neighbor = **B** ✓ Not visited → go deeper

---

## 🔵 Step 2 → Visit B

- **visited:** `{ A, B }`
- **Action:** Print B

**Neighbors of B:** `[A, D]`

- First neighbor = **A** ✗ Already visited → skip
- Next neighbor = **D** ✓ Not visited → go deeper

---

## 🔵 Step 3 → Visit D

- **visited:** `{ A, B, D }`
- **Action:** Print D

**Neighbors of D:** `[B, C]`

- **B** visited → skip
- Next neighbor = **C** ✓ Not visited → go deeper

---

## 🔵 Step 4 → Visit C

- **visited:** `{ A, B, D, C }`
- **Action:** Print C

**Neighbors of C:** `[A, D]`

- Both visited → nothing to do

---

## 🔁 Backtracking Happens

We return step-by-step:

```
C → D → B → A
```

Now **A** checks next neighbor (**C**), but **C** is already visited → skip

**Done!**

---

## ✅ Final Output Order

```
A
B
D
C
```

---

## 🧠 What Just Happened (Visualization)

**DFS Path:**

```
A
 ↓
B
 ↓
D
 ↓
C

(Then backtrack)
```

---

## 🔥 Why This Doesn't Loop Forever?

Because of this check:

```javascript
if (!visited.has(neighbor))
```

Without this check, it would go:

```
A → B → A → B → A → B → ∞ (forever)
```

---

## 💡 Important Understanding: Call Stack

**DFS uses the Call Stack** for recursion.

Each recursive call is stored in memory like this:

```
dfs(A)
  └─ dfs(B)
     └─ dfs(D)
        └─ dfs(C)  ← deepest call
```

**When a function finishes:**

1. `dfs(C)` finishes → **pops** from stack
2. `dfs(D)` finishes → **pops** from stack
3. `dfs(B)` finishes → **pops** from stack
4. `dfs(A)` finishes → **pops** from stack

**This automatic popping is called Backtracking.**