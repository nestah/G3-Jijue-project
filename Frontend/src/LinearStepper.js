import React, { useState } from "react";
import {
  Typography,
  TextField,
  Input,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Age information",
    "Demographic Information",
    "Sexual Orientation",
    "Marital Status",
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="Age"
            label="Age"
            variant="outlined"
            placeholder="Enter Your Age"
            margin="normal"
            name="Age"
          />
          
        </>
      );

    case 1:
      return (
        <>
        
          <label>Male :</label>
          <Input className="radio" type='radio' name='gender' value='male'/>
          <br/>
          <label>FeMale :</label>
          <Input type='radio' name='gender' value='female'/>
          
        </>
      );
    case 2:
      return (
        <>
         
         <label>HeteroSexual :</label>
          <Input className="radio" type='radio' name='gender' value='HeteroSexual'/>
          <br/>
          <label>Bisexual :</label>
          <Input type='radio' name='gender' value='Bisexual'/>
          <br/>
          <label>Gay :</label>
          <Input className="radio" type='radio' name='gender' value='Gay'/>
          <br/>
          
        </>
      );
    case 3:
      return (
        <>
         <label>Married :</label>
          <Input className="radio" type='radio' name='status' value='Married'/>
          <br/>
          <label>UnMarried :</label>
          <Input className="radio" type='radio' name='status' value='UnMarried'/>
          <br/>
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

 
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
  
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You, Your Assessment Score will be generated shortly
          <div>
            <a href='/facebook.com'>
              <Button style={{marginTop:"2rem",color:"black"}} className='primaryx'>
        Reffer a friend
          </Button>
            </a>
             
          </div>
         
        </Typography>
        
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
         
        </>
       
      )}
    </div>
        

  );
};

export default LinaerStepper;