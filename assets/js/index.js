console.log("Entro index.js");
// Convertimos el JSON a objeto de javascript
let objStudents = JSON.parse(db);

// a partir de este punto ya se trabaja como cualquier objeto
// console.log(objStudents);
// console.log(objStudents.students);


objStudents.students.forEach(student => {
    let sumGrades = student.grades.reduce((total, grade) => {return total + grade}, 0);
    // let sumGrades = student.grades.reduce((total, grade) => total + grade, 0);
    student.average = Number( (sumGrades / 3).toFixed(2) );
    // console.log(student);
});


let miCalculadora = new Calculadora();

console.log(miCalculadora.sumar(2,2), "Suma en calculadora");
console.log(miCalculadora.restar(5,2), "Resta en calculadora");
console.log(miCalculadora.multiplicar(5,2), "Multiplicacion en calculadora");
console.log(miCalculadora.dividir(6,3), "Dividir en calculadora");


let miCalculadoraCientifica = new CalculadoraCientifica();

console.log(miCalculadoraCientifica.sumar(3,3), "Suma desde calculadora cientifica");


console.log(miCalculadoraCientifica.raizCuadrada(9), "raiz cuadrada desde calculadora científica");
