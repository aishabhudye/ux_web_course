// Correct answer for all multiple choice questions
const correctAnswersDictionary = {
    biology_mc1_question0: "B",
    biology_mc1_question1: "D",
    biology_mc1_question2: "A",
    biology_mc2_question0: "C",
    biology_mc2_question1: "D",
    biology_mc2_question2: "A",
    biology_mc3_question0: "B",
    biology_mc3_question1: "B",
    biology_mc3_question2: "A",
    biology_mc4_question0: "B",
    biology_mc4_question1: "D",
    biology_mc4_question2: "B",
    biology_mc5_question0: "D",
    biology_mc5_question1: "B",
    biology_mc5_question2: "B",
    physics_mc1_question0: "C",
    physics_mc1_question1: "C",
    physics_mc1_question2: "B",
    physics_mc2_question0: "A",
    physics_mc2_question1: "B",
    physics_mc2_question2: "C",
    physics_mc3_question0: "B",
    physics_mc3_question1: "B",
    physics_mc3_question2: "B",
    physics_mc4_question0: "C",
    physics_mc4_question1: "D",
    physics_mc4_question2: "A",
    physics_mc5_question0: "C",
    physics_mc5_question1: "A",
    physics_mc5_question2: "C",
    chemistry_mc1_question0: "B",
    chemistry_mc1_question1: "B",
    chemistry_mc1_question2: "C",
    chemistry_mc2_question0: "C",
    chemistry_mc2_question1: "D",
    chemistry_mc2_question2: "A",
    chemistry_mc3_question0: "B",
    chemistry_mc3_question1: "A",
    chemistry_mc3_question2: "B",
    chemistry_mc4_question0: "D",
    chemistry_mc4_question1: "B",
    chemistry_mc4_question2: "A",
    chemistry_mc5_question0: "B",
    chemistry_mc5_question1: "A",
    chemistry_mc5_question2: "A",
}


var correctAnswersMapping = new Map(Object.entries(correctAnswersDictionary))

function getStudentAnswerMapping() {
    //Create a new map
    var studentAnswerMapping = new Map();
    var radios = document.getElementsByTagName('input');
    for (i = 0; i < radios.length; i++) {
        if (radios[i].type == 'radio' && radios[i].checked) {
            //Populate map
            studentAnswerMapping.set(radios[i].name, radios[i].value);
        }
    }
    return studentAnswerMapping;
}

function getStudentScore(studentAnswerMapping) {
    var score = 0;
    for (let [key,value] of studentAnswerMapping) {
        const correctAnswer = correctAnswersMapping.get(key);
        if (value == correctAnswer) {
            score++;
        }
    }

    return score;
}

function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getStudentScore(getStudentAnswerMapping());
}