const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.nodes=[];
	}
	push(data, priority) {
		let n = new Node(data, priority);
		this.insertNode(n);
		this.shiftNodeUp(n);
	}
	pop() {
		if (this.isEmpty()) return;
		let detachedRoot = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detachedRoot);
		this.shiftNodeDown(this.root);
		return detachedRoot.data;
	}
	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {


	}

	size() {
		return this.nodes.length;
	}

	isEmpty() {
		if (this.parentNodes.length<1) return true;
		else return false;
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

		}
	}

module.exports = MaxHeap;
