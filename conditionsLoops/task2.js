const averageGrade = 25;

switch (true) {
  case averageGrade <= 60:
    console.log("Grade: Unsatisfactory");
    break;
  case averageGrade <= 70:
    console.log("Grade: Satisfactory");
    break;
  case averageGrade <= 80:
    console.log("Grade: Good");
    break;
  case averageGrade <= 90:
    console.log("Grade: Very Good");
    break;
  case averageGrade <= 100:
    console.log("Grade: Excellent");
    break;
  default:
    console.log("Outstanding");
}
