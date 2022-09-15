function foo(a, b) {
    console.log(a-b)
}

function bar(a, b){
    foo(a, b)
    foo(b, a)
}

foo(3,2)
bar(1,3)