class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insert(node) {
        let prev = this.tail.prev;
        let next = this.tail;

        node.prev = prev;
        node.next = next;

        prev.next = node;
        next.prev = node;
    }

    remove(node){

        let prev = node.prev;
        let next = node.next;
        
        prev.next = next;
        next.prev = prev;
    }

    get(key) {
        if(!this.cache.has(key)){
            return -1;
        }
        const node = this.cache.get(key);

      this.remove(node);
      this.insert(node);

      return node.value;

    }

    put(key, value) {
        if(this.cache.has(key)){
            const node = this.cache.get(key)
            node.value = value;
            this.remove(node);
            this.insert(node);

            return;
        }

        const newNode = new Node(key,value);

        this.cache.set(key,newNode);
        this.insert(newNode)

        if(this.cache.size > this.capacity){
            const lru = this.head.next;

            this.remove(lru);
            this.cache.delete(lru.key)
        }
    }
}


