//complete this code
class Person {
	constructor(name,age){
		this.name = name
		this.age= age
	}
	getName (){
		return this.name
	}
	setAge(newAge){
		this.age = newAge
	}
}

class Student extends Person {

	constructor(name,age){
		super(name,age)
		
	}
	study(){
		console.log(this.name + " is studying");
	}
	
}

class Teacher extends Person {

			constructor(name,age){
		super(name,age)
	}

	teach(){
		console.log(this.name+" is teaching")
	}
}

const pers = new Person("John",25)
console.log(pers.getName())
pers.setAge(30)
console.log(pers.age)

let std = new Student("Alice",22)
std.study()

let teaches  = new Teacher("Bob",40)
	teaches.teach()
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
