class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null  // start of the list
    }

    // Add a node to the end
    append(value) {
        const newNode = new Node(value)

        // If list is empty, new node becomes the head
        if (!this.head) {
            this.head = newNode
            return
        }

        // Otherwise traverse to the end
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    // Exercise: I created this
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    // Print the whole list
    print() {
        let current = this.head
        const values = []
        while (current) {
            values.push(current.value)
            current = current.next
        }
        console.log(values.join(" → "))
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.print()  // 1 → 2 → 3