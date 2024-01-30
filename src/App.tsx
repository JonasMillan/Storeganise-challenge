import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponsiveStepper from "./components/ResponsiveStepper";
import stepperData from "../stepData.json";
import { StepType } from "./types/stepperDataType";
import { useCallback } from "react";

export default function App() {
  const handleNextStep = useCallback((activeIndex: number): boolean => {
    // this should handle the next step logic and return a false if the next step is not ready
    console.log("handleNextStep activeStepData" ,stepperData[activeIndex])
    return true;
  }, []);
  
  const handleFinish = useCallback((): void => {
    // this should handle the finish logic
    console.log("Finish");
  }, []);
  
  const renderStepsContent = useCallback((activeIndex: number): JSX.Element => {
    let component: JSX.Element;
    switch (stepperData[activeIndex]?.type) {
      case "step1":
        component = <div>Step 1</div>;
        break;
      case "step2":
        component = <div>Step 2</div>;
        break;
      default:
        component = <div>Error</div>;
        break;
    }
    return component;
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Jonas Millan Challenge
        </Typography>
        <ResponsiveStepper
          stepperData={stepperData as StepType[]}
          onNextStep={handleNextStep}
          onFinish={handleFinish}
          renderStepContent={renderStepsContent}
        />
        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
          For testing purposes, when the final button is clicked, the stepper
          will reset. Additionally, you can view the console log for the next
          step and Finish.
        </Typography>
      </Box>
    </Container>
  );
}
