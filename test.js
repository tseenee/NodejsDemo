
function run(a, callback){
    
    
    callback(process.env.NODE_ENV);
}

run("hello world", function(b){
    console.log(b);
})



const a = {
    test: "test",
    too: 123,
    func: function(){

    }
}

console.log(a.test);