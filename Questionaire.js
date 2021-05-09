
/*Tempoary Database */
var Database = {

    questionFirst: ["Have you smoked cigarettes, or do you still smoke?"],

    firstValues: [1, 1, 0],
    
    questionStart: ["Have you been exposed to dust for a long time?", "Have you got any new moles or a change in an existing mole?", "Do you have trouble breathing when you exercise?",
    "Do you have trouble urinating?", "Do you cough mucus up?"],

    startValues: [[1, 1, 0], [0, 1, 1], [1, 1, 0], [0, 1, 1], [1, 1, 0]],

    questionsCopd: ["Have you ever had a respiratory illnesses in your childhood?", "Does your family have a history of respiratory diseases?", 
    "Is your conditions affecting your quality of life?", "Do you use any kind of medicine including inhalers?", "Do you experience hoarseness?"],
    
    copdValues: [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 0]],

    questionsCancer: ["Do you have a firm or lump feeling in your breast or under your arm?", "Do you have skin that is itchy, red, scaly, dimpled or puckered?",
     "Do you experience bleeding or bruising for no known reason?", "Do you experience pain after eating? (Heartburn or indigestion that does not go away)",
      "Do you experience trouble swallowing?"],

    cancerValues: [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],

    questionsDiabetes: ["Do you often feel thirsty?", "Are you often feeling tired?", "Does your family have a history of diabetes?", 
    "Are you physically active?", "Have you ever had gestational diabetes?"],
    
    diabetesValues: [[0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],

    questionGeneral: ["yeet", "jacky chan", "big chungus",
    "sanic", "pepe"],

    generalValues: [[1, 3, 3], [7, 0, 0], [42, 0, 69], [6, 6, 6], [4, 2, 0]],

    totalQuestions: 21,

    totalValues:[21, 21, 21]

};

var running;

var storedQuestions = [];
var question = "";
var storedValues = [];
var usedQuestions = [];
var questionAnswers = [];

/* Tempoary */
var k = 0;
/* Tempoary */

var CancerValue = 0;
var COPDValue = 0;
var DiabetesValue = 0;

var i = 0;

function firstQuestion() {

    question = Database.questionFirst;

    document.getElementById('QUESTION').innerHTML 
        = question;

}

function next() {
    

    var answer = document.Questionaire.Answer.value;

    var boxCheckedYes = a1.checked;
    var boxCheckedNo = a2.checked;


    if (boxCheckedYes != true && boxCheckedNo != true) {
        
            alert("You haven't checked any boxes.");
            running = undefined;

    } else if (boxCheckedYes == true || boxCheckedNo == true) {
        
            running = true;

    }

    if (storedQuestions == "" && storedValues == "") {

        storedQuestions = Database.questionStart;
        storedValues = Database.startValues;
    }

    if ((COPDValue > (0.9 * Database.totalValues[0])
    && CancerValue < (0.4 * Database.totalValues[1]) 
    && DiabetesValue < (0.4 * Database.totalValues[2])) 
    || (CancerValue > (0.9 * Database.totalValues[1])
    && DiabetesValue < (0.4 * Database.totalValues[2]) 
    && COPDValue < (0.4 * Database.totalValues[0])) 
    || (DiabetesValue > (0.9 * Database.totalValues[2]) 
    && CancerValue < (0.4 * Database.totalValues[1]) 
    && COPDValue < (0.4 * Database.totalValues[0]))) {

        running = false;

    } else if (COPDValue >= Database.totalValues[0] || CancerValue >= Database.totalValues[1] || DiabetesValue >= Database.totalValues[2]) {

        running = false;

    } else if (k >= Database.totalQuestions) {

        running = false;

    }


    if (running == true) {

        if (question == Database.questionFirst) {

            if (answer == "yes") {

                COPDValue = COPDValue + Database.firstValues[0];
                CancerValue = CancerValue + Database.firstValues[1];
                DiabetesValue = DiabetesValue + Database.firstValues[2];
        
            } else if (answer == "no") {
        
                COPDValue = COPDValue + (1 - Database.firstValues[0]);
                CancerValue = CancerValue + (1 - Database.firstValues[1]);
                DiabetesValue = DiabetesValue + (1 - Database.firstValues[2]);
        
            }
            
            question = storedQuestions[i];
            
            document.getElementById('QUESTION').innerHTML
                = question;
             
            console.log(COPDValue, " ", CancerValue, " ", DiabetesValue);

        } else {

            if (question == storedQuestions[i]) {

                document.getElementById('QUESTION').innerHTML
                    = question;
    
                if (answer == "yes") {
    
                    COPDValue = COPDValue + storedValues[i][0];
                    CancerValue = CancerValue + storedValues[i][1];
                    DiabetesValue = DiabetesValue + storedValues[i][2];
        
                } else if (answer == "no") {
        
                    COPDValue = COPDValue + (1 - storedValues[i][0]);
                    CancerValue = CancerValue + (1 - storedValues[i][1]);
                    DiabetesValue = DiabetesValue + (1 - storedValues[i][2]);
    
                }

                i++;
                    
                question = storedQuestions[i];
                console.log(COPDValue, " ", CancerValue, " ", DiabetesValue);


                /* Tempoary */
                for(var j = 0; j > usedQuestions.length; j++) {

                    if (usedQuestions[j] == question) {
                        
                        i++;
                        if (i >= storedQuestions.length) break;
                        question = storedQuestions[i];
                        j=-1;
                    
                    }
                    
                }
                
                if(j > usedQuestions.length) {

                    usedQuestions[k] = question;
                    questionAnswers[k] = answer;
                    k++;
    
                }
                /* Tempoary */

            }
            
        }

        if (i >= storedQuestions.length && COPDValue > CancerValue && COPDValue > DiabetesValue) {

            storedQuestions = Database.questionsCopd;
            storedValues = Database.copdValues;

            i = 0;

            question = storedQuestions[i];

        } else if (i >= storedQuestions.length && CancerValue > COPDValue && CancerValue > DiabetesValue) {

            storedQuestions = Database.questionsCancer;
            storedValues = Database.cancerValues;

            i = 0;

            question = storedQuestions[i];

        } else if (i >= storedQuestions.length && DiabetesValue > CancerValue && DiabetesValue > COPDValue) {
            
            storedQuestions = Database.questionsDiabetes;
            storedValues = Database.diabetesValues;

            i = 0;

            question = storedQuestions[i];


        } else if (i >= storedQuestions.length && (DiabetesValue == CancerValue || DiabetesValue == COPDValue || CancerValue == COPDValue)) {
            
            storedQuestions = Database.questionGeneral;
            storedValues = Database.generalValues;

            i = 0;

            question = storedQuestions[i];

        }

    } else if (running == false) {

        /* Save usedQuestions, questionAnswers, and the three disease values into our database 
        Array structure in database:
        [["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        ["Question", "Answer"]
        [[copd value, cancer value, diabetes value], comment (stored on next page)]]
        */

        window.location = "commentUK.html";

    }

    console.log(question);
    console.log(storedQuestions);
    console.log(storedValues);

    
}


// Use as to figure out value instead of it being in next()
function check() {

}

// Use to exchange the questions and values for the questions instead of it being in next()
function exchange() {

}

function stopProgram() {

}


