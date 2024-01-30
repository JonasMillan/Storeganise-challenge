import { Fragment, memo } from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { StepType } from "../../types/stepperDataType";

function WebStepper(
  {
    activeStep,
    stepperData,
    handleNext,
    handleFinish,
  }: {
    activeStep: number;
    stepperData: StepType[];
    handleNext: () => void;
    handleFinish: () => void;
  } = {
    activeStep: 0,
    stepperData: [],
    handleNext: () => {},
    handleFinish: () => {},
  }
) {
  return (
    <Fragment>
      <Stepper activeStep={activeStep}>
        {stepperData.map(({ type, state }) => {
          const stepProps: { completed?: boolean } = {};

          if (state === "completed") {
            stepProps.completed = true;
          }

          return (
            <Step key={type} {...stepProps}>
              <StepLabel>{type}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === stepperData.length ? (
        <Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleFinish}>Finish</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>Next</Button>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
}
export default memo(WebStepper);