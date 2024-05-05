class Node{
    constructor(value, next) {
        this.value = value;
        this.next =next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val, this.top); // val : value, this.top : pointer
        this.top = newNode;
        this.size ++;
    }

    pop() {
        if(this.size > 0){
         let getNode = this.top.value;
         this.top = this.top.next;
         this.size--;
        }
    }
    
    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw 'Sorry Stack UnderFlow'
        }
    }

    isEmpty() {
        return this.size === 0
    }

    print() {
        var holder = this.top;
        while(holder.next !== null){
            console.log(holder.value);
            holder = holder.next;
        }
    }

}