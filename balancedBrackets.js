/*
You're given a string s consisting solely of "(" and ")". Return whether the parentheses are balanced.
Constraints
n ≤ 100,000 where n is the length of s.

Example 1
Input
s = "()"
Output
true

Example 2
Input
s = "()()"
Output
true

Example 3
Input
s = ")("
Output
false

Example 4
Input
s = ""
Output
true

Example 5
Input
s = "((()))"
Output
true

Example 6
Input
s = "((()"
Output
false
*/

function isOpen(b){
    return (b==='{'||b==='['||b==='(');
}
function isMatch(open,close){
    if(open==='{' && close==='}'){
        return true;
    }
    if(open==='(' && close===')'){
        return true;
    }
    if(open==='[' && close===']'){
        return true;
    }
    return false;
}
function isBalanced(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(isOpen(s[i])){
            stack.push(s[i])
        }else{
            let open = stack[stack.length-1]
            if(isMatch(open,s[i])){
                stack.pop();
            }else{
                return "NO"
            }
        }
    }
    if(stack.length===0){
        return 'YES'
    } else {
        return 'NO'
    }
}



balancedBrackets(s) {
    if(s===''){
        return true;
    }
    let x = 0;
    let prev = 0;
    for(let i=0;i<s.length;i++){
        prev = x;
        if(s[i]==='('){
            x++;
        } else if(s[i]===')'){
            if(x<=0){
                return false;
            }
            x--;
        }
    }
    if(x===0){
        if(prev>0){
            return true;
        }
        return false;
    }return false;
}

console.log(balancedBrackets("((()"));
