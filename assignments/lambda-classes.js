// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
        this.subject = attributes.subject
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(attributes){
    super(attributes);
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${instructor.subject}.`;
    }
    grade(subject){
        return `${student.name} receives a perfect score on ${student.subject}.`;
    }
}

class Student extends Person{
    constructor(attributes){
    super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${student.subject}.`;
    }
}

class projectManager extends Instructor{
    constructor(attributes){
    super(attributes);
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
        this.channel = attributes.channel
    }
    standUp(channel){
        return `${this.name} annouces to ${manager.channel}, @channel standy times!`;
    }
    debugsCode(subject){
        return `${this.name} debugs ${student.name}'s code on ${student.subject}.`;
    }
}

const person = new Person({
    name: 'Fred',
    age: 40,
    location: 'Bedrock',
    subject: 'UX Design'
})
const instructor = new Instructor({
    name: 'Jenna',
    age: 32,
    location: 'San Francisco',
    specialty: 'Redux',
    favLanguage: 'JavaScript, Pyton, Elm etc',
    catchPhrase: `Don't forget the homies`,
    subject: 'Advanced CSS'
})
const student = new Student({
    name: 'Joe',
    age: 25,
    location: 'Henderson',
    specialty: 'Python',
    favLanguage: 'React',
    subject: 'JavaScript',
    previousBackground: 'Uber Driver',
    className: 'CS132',
    favSubjects: ['HTML', ' CSS', ' JavaScript'],
})
const manager = new projectManager({
    name: 'Carol',
    channel: 'Help Channel',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    subject: 'React',
}) 

console.log(person.speak());
console.log(instructor.demo());
console.log(instructor.grade());
console.log(student.listsSubjects());
console.log(student.PRAssignment());
console.log(student.sprintChallenge());
console.log(manager.standUp());
console.log(manager.debugsCode());