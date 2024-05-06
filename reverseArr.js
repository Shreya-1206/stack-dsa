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
     
function reverseStack(s){
    let arr= [];

    while(!s.isEmpty()){
        arr.push(s.pop());
    }

    for(let i = 0; i < arr.length; i++){
        s.push(arr[i])
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);  

s.print();

reverseStack(s);
s.print();