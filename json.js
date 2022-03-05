// This is json
obj={name:"suraj",length:1,a:{ this:'tha\\"t"'}};// we give one smybol it give one extra
jso=JSON.stringify(obj);
console.log(typeof jso);//typeof means what is string
console.log(jso);
parsed=json.parse('{name:"suraj",length:1,a:{ this:'tha\\"t"'}}');
console.log(parsed);  