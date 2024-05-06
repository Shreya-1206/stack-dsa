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

let undoStack = new Stack();
let redoStack = new Stack();
let counter =0;

function incrementNum() {
  undoStack.push(counter);
  counter++;
  document.getElementById('val').value = counter;
}