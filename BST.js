// Create a BST Class

class BinarySearchTree {
    constructor(key = null, value = null, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        // If the tree exists, compare insert key to each node's key
        else if (key < this.key) {
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else if (key > this.key) {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        // base case when key is found at the root
        if (this.key == key) {
            return this.value;
        }
        // check left branch of tree if key is less than the root key
        else if (key < this.key && this.left) {
            this.left.find(key);
        }
        // check right branch if key is greater than the root key
        else if (key > this.key && this.right) {
            this.right.find(key);
        }
        // throw error if no matching key's are found in the tree
        else {
            throw new Error('Key Error');
        } 
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    inOrder(values=[]) {
        if (this.left) {
            values = this.left.inOrder(values);
        }
        values.push(this.value);

        if(this.right) {
            values = this.right.inOrder(values);
        }
        return values;
    }
    preOrder(values=[]) {
        values.push(this.value);

        if (this.left) {
            values = this.left.preOrder(values);
        }
        if(this.right) {
            values = this.right.preOrder(values);
        }
        return values;
    }
    postOrder(values=[]) {
        if (this.left) {
            values = this.left.postOrder(values);
        }
        if(this.right) {
            values = this.right.postOrder(values);
        }
        values.push(this.value);

        return values;
    }
    breadthSort(values = []) {
        const queue = new Queue();
        const node = this;
        console.log(node.value)
        queue.enqueue(node);
        while (queue.first) {
            const node = queue.dequeue();
            values.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }
        return values;
    }
}

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            node.previous = this.last;
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first;
        if (node === this.last) {
            this.last = null;
            this.first = null;
        }
        else {
            this.first = this.first.next;
            this.first.previous = null;
            node.next = null;
        }
        return node.value;
    }
}

module.exports = BinarySearchTree