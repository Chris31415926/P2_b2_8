var running = 1;

var question = "";

var q1 = "Are you cold?";
var q2 = "Do you or have you smoked in the past?";
var q3 = "Have you been losing a lot of weight?";
var q4 = "Do you eat a lot?";
var q5 = "Are you tired a lot?";
var q1COPD = 1;
var q1Cancer = 0;
var q1Diabetes = 0;
var q2COPD = 1;
var q2Cancer = 0;
var q2Diabetes = 0;
var q3COPD = 1;
var q3Cancer = 0;
var q3Diabetes = 0;
var q4COPD = 1;
var q4Cancer = 0;
var q4Diabetes = 0;
var q5COPD = 0;
var q5Cancer = 1;
var q5Diabetes = 0;

var q1CO = "Cool";
var q2CO = "Cold";
var q3CO = "Covid";
var q4CO = "Coolios";
var q5CO = "COCO";
var q1COCOPD = 1;
var q1COCancer = 0;
var q1CODiabetes = 0;
var q2COCOPD = 1;
var q2COCancer = 1;
var q2CODiabetes = 1;
var q3COCOPD = 0;
var q3COCancer = 1;
var q3CODiabetes = 0;
var q4COCOPD = 0;
var q4COCancer = 0;
var q4CODiabetes = 1;
var q5COCOPD = 1;
var q5COCancer = 0;
var q5CODiabetes = 1;

var q1C = "Camp";
var q2C = "Can";
var q3C = "Cannon";
var q4C = "Car";
var q5C = "Cake";
var q1CCOPD = 1;
var q1CCancer = 1;
var q1CDiabetes = 1;
var q2CCOPD = 0;
var q2CCancer = 1;
var q2CDiabetes = 0;
var q3CCOPD = 1;
var q3CCancer = 1;
var q3CDiabetes = 0;
var q4CCOPD = 1;
var q4CCancer = 0;
var q4CDiabetes = 1;
var q5CCOPD = 0;
var q5CCancer = 1;
var q5CDiabetes = 1;

var q1D = "Dish";
var q2D = "Dash";
var q3D = "Dush";
var q4D = "Dosh";
var q5D = "Desh";
var q1DCOPD = 1;
var q1DCancer = 0;
var q1DDiabetes = 0;
var q2DCOPD = 1;
var q2DCancer = 0;
var q2DDiabetes = 0;
var q3DCOPD = 1;
var q3DCancer = 0;
var q3DDiabetes = 0;
var q4DCOPD = 1;
var q4DCancer = 0;
var q4DDiabetes = 0;
var q5DCOPD = 1;
var q5DCancer = 0;
var q5DDiabetes = 0;

function next() {

    var answer = document.Questionaire.Answer.value;
    var CancerValue = 0;
    var COPDValue = 0;
    var DiabetesValue = 0;

    if (running == true) {

        if (question == "") {

            if (answer == "yes") {

                COPDValue++;
        
            } else if (answer == "no") {
        
                CancerValue++;
        
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
        
    } else {

        document.write(COPDValue);
        document.write(" ");
        document.write(CancerValue);
        document.write(" ");
        document.write(DiabetesValue);

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