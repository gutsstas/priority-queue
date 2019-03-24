const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap;
			this.maxSize = maxSize;
	}

	push(data, priority) {
if (this.size()<this.maxSize) this.heap.push(data, priority);
else throw new Error('heap is full')
}

shift() {
if (this.size()>0) {
	return this.heap.pop();
}
else throw new Error('heap is empty');
}

size() {
	return this.heap.size();

}

isEmpty() {
	return this.heap.isEmpty();
}
}


module.exports = PriorityQueue;
