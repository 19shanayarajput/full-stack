const students = [
  { name: "Aarav", subject: "Maths", marks: 88 },
  { name: "Rohan", subject: "Science", marks: 22 },
  { name: "Kabir", subject: "Maths", marks: 76 },
  { name: "Aditya", subject: "Computers", marks: 59 },
  { name: "Priya", subject: "Science", marks: 81 },
  { name: "Vikram", subject: "Maths", marks: 34 },
  { name: "Ananya", subject: "Computers", marks: 91 },
  { name: "Rahul", subject: "Science", marks: 47 },
  { name: "Ishita", subject: "Maths", marks: 69 },
  { name: "Arjun", subject: "Computers", marks: 73 }
];

const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);

const failedStudents = students.filter(student => student.marks < 40);
console.log("Failed Students:", failedStudents);

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);

const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);
console.log("Topper:", topper);

const groupedBySubject = students.reduce((group, student) => {
  if (!group[student.subject]) {
    group[student.subject] = [];
  }

  group[student.subject].push(student);
  return group;
}, {});

console.log("Grouped by Subject:", groupedBySubject);