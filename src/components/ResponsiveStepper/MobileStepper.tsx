import { memo } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { StepType } from "../../types/stepperDataType";

function MobileStepperView(
  {
    stepperData,
    activeStep,
    handleNext,
    handleFinish,
  }: {
    stepperData: StepType[];
    activeStep: number;
    handleNext: () => void;
    handleFinish: () => void;
  } = {
    activeStep: 0,
    stepperData: [],
    handleNext: () => {},
    handleFinish: () => {},
  }
) {
  const nextButtonOnClick =
    activeStep === stepperData.length ? handleFinish : handleNext;
  return (
    <MobileStepper
      variant="progress"
      steps={stepperData.length + 1}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={nextButtonOnClick}>
          {activeStep === stepperData.length ? "Finish" : "Next"}
          {activeStep !== stepperData.length && <KeyboardArrowRight />}
        </Button>
      }
      backButton={<span></span>}
    />
  );
}
export default memo(MobileStepperView);
