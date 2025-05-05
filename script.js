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
		console.log(this.name +" is studing")
	}
	
}

class Teacher extends Person {

			constructor(){
		super("silkant",67)
	}

	teach(){
		console.log(this.name+" is teaching")
	}
}

const student = new Student();
student.study(); // Output: Rah is studying

const teacher = new Teacher();
teacher.teach(); 


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
