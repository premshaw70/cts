function Student(id, firstName, lastName, email) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
}

Student.prototype.name = function(){
    return this.firstName + ' ' + this.lastName
}

var students = []

function addStudent() {
    let student = new Student(
        document.getElementById('id').value,
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('email').value
    )

    students.push(student)
    console.log(students)
    students.forEach(element => {
        console.log(element.name())
    });
}