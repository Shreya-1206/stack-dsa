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





function bracketMatch(string){
    let bracketStack = new Stack();
    let i = 0;

    while(i < string.length){
        var chaVal = string.charAt(i);

        if(chaVal === "("){
            bracketStack.push(chaVal);
        } else if(chaVal === ")"){
            if(!bracketStack.isEmpty()){
                bracketStack.pop();
            } else {
                throw 'Sorry, No Opening Bracket For This Closing One !!';
            }
        }

        i++; // Increment i inside the loop
    }

    if(!bracketStack.isEmpty()) {
        throw 'Sorry, Missing Closing Bracket !!';
    } else {
        console.log('Yess, All Brackets Are Balanced !!');
    }
}

const testStr = "((1+9)";
bracketMatch(testStr);