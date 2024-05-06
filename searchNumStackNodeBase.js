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

    // search(val) {
    //     var index =-1;
    //     var found =false;
    //     var holder =this.top;

    //     while(!found && holder != null) {
    //         if (holder.value === val ) {
    //             found = true;
    //         }
    //         holder = holder.next;
    //         index ++;
    //     }
    //     if (!found) {
    //         return -1;
    //     } else {
    //         return index;
    //     }
    // }
  
    search(val) {
        var index = -1;
        var found = false;
        var holder = this.top;
    
        while (!found && holder !== null) {
            console.log("Current value:", holder.value);
            if (holder.value === val) {
                found = true;
            }
            holder = holder.next;
            index++;
        }
    
        if (!found) {
            console.log("Value not found");
            return -1;
        } else {
            console.log("Value found at index:", index);
            return index;
        }
    }
    print() {
        var holder = this.top;
        while(holder.next !== null){
            console.log(holder.value);
            holder = holder.next;
        }
    }

}


let s = new Stack();

console.log(s.push(2));
console.log(s.search(2));