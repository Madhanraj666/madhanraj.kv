console.log("first console")
var a = "10";
var b = "10";
var c = "20";
var d = [1, 23, 3, 54, { a: "name" }, { b: "age" }, { c: "city" }, { d: "country" },
    { a: "school" }, { b: "class" }, { c: "mark" }, { d: "subject" },
    { a: "height" }, { b: "weight" }
]
console.log(d);
document.getElementById("f1").innerHTML = d;
console.log(a,c);
document.getElementById("f2").innerHTML = a < c;