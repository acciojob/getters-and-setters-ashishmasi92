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

	constructor(){
		super("rah",13)
		
	}
	study(){
		console.log(this.name +"is studing")
	}
	
}

class Teacher extends Person {

	contructor(){
		super("silkant",67)
	}

	teach(){
		console.log(this.name+is teaching)
	}
}




// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
