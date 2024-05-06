class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
       return this.stack.push(val);
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack)
    }
}

function sortStack(s){
 let tempStack = new Stack();

 while(!s.isEmpty()){
    var val = s.pop();

    while(!tempStack.isEmpty() && tempStack.peek() > val){  
        s.push(tempStack.pop());
    }
    tempStack.push(val);
 }
 while(!tempStack.isEmpty()){
    s.push(tempStack.pop());
 }
};

let s =new Stack();

s.push(1);
s.push(4);
s.push(2);
s.push(3);


s.print();

sortStack(s);
s.print();
