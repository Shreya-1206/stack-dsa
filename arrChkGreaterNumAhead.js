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
        console.log(this.stack.length)
    }
}


function greaterNumAhead(arr){
    let s = new Stack;

    s.push(arr[0]);

    for(let i = 1; i< arr.length; i++){
        if(s.isEmpty()){
            s.push(arr[i]);
        }else {
            while(!s.isEmpty() && s.peek() < arr[i]){
                 console.log(s.pop() + " ---> " + arr[i])
            }

            s.push(arr[i])
        }
    }
    while(!s.isEmpty()) {
        console.log(s.pop() + " ---> " + -1)
    }
}

const arr = [6,10,2,3];
greaterNumAhead(arr);