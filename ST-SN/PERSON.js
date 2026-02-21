class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
}
class Student extends Person{
    constructor(name, age, grades) {
        super(name, age);
        this.grades = grades;
    }
}
class Teacher extends Person {
    constructor(name, age, lesson) {
        super(name, age);
        this.lesson = lesson;
}
}
