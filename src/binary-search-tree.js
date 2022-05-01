const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data);
    } else {
      let n = this._root;
      while (true) {
        if (data > n.data) {
          if (!n.right) {
            n.right = new Node(data);
            return;
          } else {
            n = n.right;
          }
        } else {
          if (!n.left) {
            n.left = new Node(data);
            return;
          } else {
            n = n.left;
          }
        }
      }
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    function findElement(node, data) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      if (data >= node.data){
        return findElement(node.right, data)
      }else {
        return findElement(node.left, data)
      }
    }

    return findElement(this._root , data);
  }

  remove(data) {
    this._root = removeElement(this._root, data);

    function removeElement(node, value) {
      if (!node) {
        return null;
      }

      if (value === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (node.left && node.right) {
          let substitute = node.right;

          while (substitute.left) {
            substitute = substitute.left;
          }

          node.data = substitute.data;
          node.right = removeElement(node.right, substitute.data);
          return node;
        }
      } else if (value < node.data) {
        node.left = removeElement(node.left, value);
      } else {
        node.right = removeElement(node.right, value);
      }
      return node;
    }
  }

  min() {
    if (!this._root ) {
      return null;
    }

    let min = this._root ;
    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this._root ) {
      return null;
    }

    let max = this._root ;
    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree,
};
