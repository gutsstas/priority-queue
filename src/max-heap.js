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
		if(this.root!=null){
		 	 let detached=new Node(null,null);
      detached=this.detachRoot();
		 if(this.parentNodes.length>0) {
			 this.restoreRootFromLastInsertedNode(detached);
		     this.shiftNodeDown(this.root);
		     }
		 return this.root.data;
		}
	}
	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {


	}

	size() {
		return this.nodes.length;
	}

	isEmpty() {
		if (this.parentNodes.length === 0) return true;
		else return false;
			}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if (this.isEmpty()) {
	 this.root=node;
			 this.nodes.push(node);
	 this.parentNodes.push(node);
	}
	 else {
				this.nodes.push(node);
		this.parentNodes.push(node);
		this.parentNodes[0].appendChild(node);
		if (this.parentNodes[0].right!=null) this.parentNodes.shift();
		}
}


	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

		}
	}

module.exports = MaxHeap;
