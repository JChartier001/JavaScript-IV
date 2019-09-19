// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }
    speak() {
        return `Hello, my name is ${this.name}.  I am from ${this.location}.`;
    }
}


class Instructor extends Person{
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }
    score(student) {
        
        return student.grade(student) + Math.random() < 0.5 ? -1 : 1;
    }
}

class Student extends Person{
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    grade() {        
        return Math.floor(Math.random() * 101);
    }
    listsSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for  ${subject}.`;
    }
    graduate(student) {
        if (student.grade(student) > 70) {
            return true;
        } else
        {
            return false;
        }
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(program) {
        super(program);
        this.gradClassName = program.gradClassName;
        this.favInstructor = program.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const James = new Person({
    name: "James",
    age: 39,
    location: "Michigan"

})
const Jackie = new Person({
    name: 'Jackie',
    age: 47,
    location: 'New Jersey'
})

const Erika = new Instructor({
    name: 'Erika',
    age: 45,
    location: 'California',
    specialty: "web design",
    favLanguage: 'C#',
    catchPhrase: "Class dismissed!!"
})

const Eddie = new Instructor({
    name: 'Eddie',
    age: 26,
    location: 'Louisiana',
    specialty: 'Java',
    favLanguage: "JavaScript", 
    catchPhrase: "Let's write some code!"
})

const Jodie = new Student({
    name: "Jodie",
    age: 22,
    location: 'Florida',
    previousBackground: "Customer Service",
    className: "JavaScript",
    favSubjects: "HTML, CSS, React.",
    
})

const Keith = new Student({
    name: 'Keith',
    age: 45,
    location: 'Wisconsin',
    previousBackground: 'RV Technician',
    className: 'HTML',
    favSubjects: "HTML"
   
})

const Christian = new ProjectManager({
    name: 'Christian',
    age: 27,
    location: 'Wyoming',
    specialty: "Backend Web Development",
    favLanguage: "Java",
    catchPhrase: "Let's Party!!",
    gradClassName: "Advanced Coding",
    favInstructor: "Erika",
    
})

const Todd = new ProjectManager({
    name: 'Todd',
    age: 38,
    location: 'Washington',
    specialty: "JavaScript",
    favLanguage: "HTML",
    catchPhrase: "Get outta here!",
    gradClassName: "None, retired",
    favInstructor: "Eddie",
})

console.log(James.speak());
console.log(Jackie.speak());
console.log(Erika.speak());
console.log(Erika.demo("CSS"));
console.log(Erika.grade(Keith, "HTML"));
console.log(Eddie.speak());
console.log(Eddie.demo("Web Design"));
console.log(Eddie.grade(Jodie, "Android Programs"));
console.log(Christian.speak());
console.log(Christian.demo("Web Design"));
console.log(Christian.grade(Jodie, "Android Programs"));
console.log(Christian.standUp("Web24"));
console.log(Christian.debugsCode(Keith, "HTML"));
console.log(Todd.speak());
console.log(Todd.demo("Web Design"));
console.log(Todd.grade(Keith, "CSS"));
console.log(Todd.standUp("TeamTodd"));
console.log(Todd.debugsCode(Jodie, "Node.js"));
console.log(Jodie.speak());
console.log(Jodie.listsSubjects());
console.log(Jodie.PRAssignment('Node.js'));
console.log(Jodie.sprintChallenge("Webpage"));
console.log(Keith.speak());
console.log(Keith.listsSubjects());
console.log(Keith.PRAssignment('CSS'));
console.log(Keith.sprintChallenge("CSS"));
console.log(Keith.grade(Keith));
console.log(Keith.graduate(Keith));
console.log(Christian.score(Keith));
console.log(Jodie.grade(Jodie));
console.log(Jodie.graduate(Jodie));
console.log(Christian.score(Jodie));