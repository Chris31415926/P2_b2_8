var running;

var question = "";

var stopAlgorithm = 0;
var CancerValue = 0;
var COPDValue = 0;
var DiabetesValue = 0;

var q1 = "Have you been exposed to dust for a long time?";
var q2 = "Have you got any new moles or a change in an existing mole?";
var q3 = "Do you have trouble breathing when you exercise?";
var q4 = "Do you have trouble urinating?";
var q5 = "Do you cough mucus up?";
var q1COPD = 1;
var q1Cancer = 1;
var q1Diabetes = 0;
var q2COPD = 0;
var q2Cancer = 1;
var q2Diabetes = 1;
var q3COPD = 1;
var q3Cancer = 1;
var q3Diabetes = 0;
var q4COPD = 0;
var q4Cancer = 1;
var q4Diabetes = 1;
var q5COPD = 1;
var q5Cancer = 1;
var q5Diabetes = 0;

var q1CO = "Have you ever had a respiratory illnesses in your childhood?";
var q2CO = "Does your family have a history of respiratory diseases?";
var q3CO = "Is your conditions affecting your quality of life?";
var q4CO = "Do you use any kind of medicine including inhalers?";
var q5CO = "Do you experience hoarseness?";
var q1COCOPD = 1;
var q1COCancer = 0;
var q1CODiabetes = 0;
var q2COCOPD = 1;
var q2COCancer = 0;
var q2CODiabetes = 0;
var q3COCOPD = 1;
var q3COCancer = 0;
var q3CODiabetes = 0;
var q4COCOPD = 1;
var q4COCancer = 0;
var q4CODiabetes = 0;
var q5COCOPD = 1;
var q5COCancer = 1;
var q5CODiabetes = 0;

var q1C = "Do you have a firm or lump feeling in your breast or under your arm?";
var q2C = "Do you have skin that is itchy, red, scaly, dimpled or puckered?";
var q3C = "Do you experience bleeding or bruising for no known reason?";
var q4C = "Do you experience pain after eating? (Heartburn or indigestion that does not go away)";
var q5C = "Do you experience trouble swallowing?";
var q1CCOPD = 0;
var q1CCancer = 1;
var q1CDiabetes = 0;
var q2CCOPD = 0;
var q2CCancer = 1;
var q2CDiabetes = 0;
var q3CCOPD = 0;
var q3CCancer = 1;
var q3CDiabetes = 0;
var q4CCOPD = 0;
var q4CCancer = 1;
var q4CDiabetes = 0;
var q5CCOPD = 0;
var q5CCancer = 1;
var q5CDiabetes = 0;

var q1D = "Do you often feel thirsty?";
var q2D = "Are you often feeling tired?";
var q3D = "Does your family have a history of diabetes?";
var q4D = "Are you physically active?";
var q5D = "Have you ever had gestational diabetes?";
var q1DCOPD = 0;
var q1DCancer = 0;
var q1DDiabetes = 1;
var q2DCOPD = 0;
var q2DCancer = 0;
var q2DDiabetes = 1;
var q3DCOPD = 0;
var q3DCancer = 0;
var q3DDiabetes = 1;
var q4DCOPD = 0;
var q4DCancer = 0;
var q4DDiabetes = 1;
var q5DCOPD = 0;
var q5DCancer = 0;
var q5DDiabetes = 1;

function next() {

    var answer = document.Questionaire.Answer.value;

    var boxCheckedYes = a1.checked;
    var boxCheckedNo = a2.checked;
    

    if(boxCheckedYes != true && boxCheckedNo != true) {

            alert("You haven't checked all boxes.");
            running = undefined;

    } else if (boxCheckedYes == true || boxCheckedNo == true) {

            running = true;

    }

    if (stopAlgorithm >= 20) {

        running = false;

    }


    if (running == true) {

        if (question == "") {

            if (answer == "yes") {

                COPDValue++;
                CancerValue++;
        
            } else if (answer == "no") {
        
                DiabetesValue++;
        
            }
            
            question = q1;

            document.getElementById('QUESTION').innerHTML
                = question;

            if (question == q1 && answer == "yes") {

                COPDValue = COPDValue + q1COPD;
                CancerValue = CancerValue + q1Cancer;
                DiabetesValue = DiabetesValue + q1Diabetes;
    
            } else if (answer == "no") {
    
                COPDValue = COPDValue + (1 - q1COPD);
                CancerValue = CancerValue + (1 - q1Cancer);
                DiabetesValue = DiabetesValue + (1 - q1Diabetes);
    
            }
          
                question = q2;
                stopAlgorithm++;    
                console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

        } else {

            if (question == q5) {

                document.getElementById('QUESTION').innerHTML
                    = question;

                if (answer == "yes") {

                    COPDValue = COPDValue + q5COPD;
                    CancerValue = CancerValue + q5Cancer;
                    DiabetesValue = DiabetesValue + q5Diabetes;
    
                } else if (answer == "no") {
    
                    COPDValue = COPDValue + (1 - q5COPD);
                    CancerValue = CancerValue + (1 - q5Cancer);
                    DiabetesValue = DiabetesValue + (1 - q5Diabetes);
    
                }

                stopAlgorithm++; 
                console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

            } if (question == q4) {

                document.getElementById('QUESTION').innerHTML
                    = question;

                if (answer == "yes") {

                    COPDValue = COPDValue + q4COPD;
                    CancerValue = CancerValue + q4Cancer;
                    DiabetesValue = DiabetesValue + q4Diabetes;
    
                } else if (answer == "no") {
    
                    COPDValue = COPDValue + (1 - q4COPD);
                    CancerValue = CancerValue + (1 - q4Cancer);
                    DiabetesValue = DiabetesValue + (1 - q4Diabetes);
    
                }

                    question = q5;
                    stopAlgorithm++; 
                    console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

            } if (question == q3) {

                document.getElementById('QUESTION').innerHTML
                    = question;

                if (answer == "yes") {

                    COPDValue = COPDValue + q3COPD;
                    CancerValue = CancerValue + q3Cancer;
                    DiabetesValue = DiabetesValue + q3Diabetes;
    
                } else if (answer == "no") {
    
                    COPDValue = COPDValue + (1 - q3COPD);
                    CancerValue = CancerValue + (1 - q3Cancer);
                    DiabetesValue = DiabetesValue + (1 - q3Diabetes);
    
                }

                    question = q4;
                    stopAlgorithm++; 
                    console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

            } if (question == q2) {

                document.getElementById('QUESTION').innerHTML
                    = question;

                if (answer == "yes") {

                    COPDValue = COPDValue + q2COPD;
                    CancerValue = CancerValue + q2Cancer;
                    DiabetesValue = DiabetesValue + q2Diabetes;
    
                } else if (answer == "no") {
    
                    COPDValue = COPDValue + (1 - q2COPD);
                    CancerValue = CancerValue + (1 - q2Cancer);
                    DiabetesValue = DiabetesValue + (1 - q2Diabetes);
    
                }  

                    question = q3;
                    stopAlgorithm++; 
                    console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

            } if (question == q1) {

                document.getElementById('QUESTION').innerHTML
                    = question;

                if (answer == "yes") {

                    COPDValue = COPDValue + q1COPD;
                    CancerValue = CancerValue + q1Cancer;
                    DiabetesValue = DiabetesValue + q1Diabetes;

                } else if (answer == "no") {

                    COPDValue = COPDValue + (1 - q1COPD);
                    CancerValue = CancerValue + (1 - q1Cancer);
                    DiabetesValue = DiabetesValue + (1 - q1Diabetes);

                }

                    question = q2;
                    stopAlgorithm++; 
                    console.log(stopAlgorithm, " ", COPDValue, " ", CancerValue, " ", DiabetesValue);

                    
            }
            
        }

        if (question == q5 && COPDValue > CancerValue && COPDValue > DiabetesValue) {

            q1 = q1CO;
            q2 = q2CO;
            q3 = q3CO;
            q4 = q4CO;
            q5 = q5CO;
            q1COPD = q1COCOPD;
            q1Cancer = q1COCancer;
            q1Diabetes = q1CODiabetes;
            q2COPD = q2COCOPD;
            q2Cancer = q2COCancer;
            q2Diabetes = q2CODiabetes;
            q3COPD = q3COCOPD;
            q3Cancer = q3COCancer;
            q3Diabetes = q3CODiabetes;
            q4COPD = q4COCOPD;
            q4Cancer = q4COCancer;
            q4Diabetes = q4CODiabetes;
            q5COPD = q5COCOPD;
            q5Cancer = q5COCancer;
            q5Diabetes = q5CODiabetes;

            question = q1;

        } else if (question == q5 && CancerValue > COPDValue && CancerValue > DiabetesValue) {

            q1 = q1C;
            q2 = q2C;
            q3 = q3C;
            q4 = q4C;
            q5 = q5C;
            q1COPD = q1CCOPD;
            q1Cancer = q1CCancer;
            q1Diabetes = q1CDiabetes;
            q2COPD = q2CCOPD;
            q2Cancer = q2CCancer;
            q2Diabetes = q2CDiabetes;
            q3COPD = q3CCOPD;
            q3Cancer = q3CCancer;
            q3Diabetes = q3CDiabetes;
            q4COPD = q4CCOPD;
            q4Cancer = q4CCancer;
            q4Diabetes = q4CDiabetes;
            q5COPD = q5CCOPD;
            q5Cancer = q5CCancer;
            q5Diabetes = q5CDiabetes;

            question = q1;

        } else if (question == q5 && DiabetesValue > CancerValue && DiabetesValue > COPDValue) {

            q1 = q1D;
            q2 = q2D;
            q3 = q3D;
            q4 = q4D;
            q5 = q5D;
            q1COPD = q1DCOPD;
            q1Cancer = q1DCancer;
            q1Diabetes = q1DDiabetes;
            q2COPD = q2DCOPD;
            q2Cancer = q2DCancer;
            q2Diabetes = q2DDiabetes;
            q3COPD = q3DCOPD;
            q3Cancer = q3DCancer;
            q3Diabetes = q3DDiabetes;
            q4COPD = q4DCOPD;
            q4Cancer = q4DCancer;
            q4Diabetes = q4DDiabetes;
            q5COPD = q5DCOPD;
            q5Cancer = q5DCancer;
            q5Diabetes = q5DDiabetes;

            question = q1;

        }

    } else if (running == false) {

        window.location = "commentUK.html";

    }
}


// Use as to figure out value instead of it being in next()
function check() {

}

// Use to exchange the questions and values for the questions instead of it being in next()
function exchange() {

}

function stopProgram() {

}