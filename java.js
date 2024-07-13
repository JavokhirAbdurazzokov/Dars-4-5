let students= ["Olma","Nok","Anor","Banan"]

console.log(students);
alert("Arrayingizni uzunligi" +  students.length);
let javob=confirm("Arrayingizdan bitasini o'chirmoqchimiz?");
if(javob==true){
    students.pop()
    alert("Arrayigizni uzunligi" + students.length)
    console.log(students);
}else{
    alert("Arrayigizni uzunligi"+ students.length)
    console.log(students);
}
