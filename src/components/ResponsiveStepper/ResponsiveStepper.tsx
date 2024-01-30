import { memo, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import { StepType } from "../../types/stepperDataType";
import WebStepper from "./WebStepper";
import MobileStepperView from "./MobileStepper";
import useMediaQuery, { MOBILE_WIDTH_QUERY } from "../../hooks/useMediaQuery";

function ResponsiveStepper(
  {
    stepperData,
    onNextStep,
    onFinish,
    renderStepContent: renderStepsContent,
  }: {
    stepperData: StepType[];
    onNextStep: (activeStep: number) => boolean;
    onFinish: () => void;
    renderStepContent: (activeStep: number) => JSX.Element;
  } = {
    stepperData: [],
    onNextStep: () => false,
    onFinish: () => {},
    renderStepContent: () => <div></div>,
  }
) {
  const isMobile = useMediaQuery(MOBILE_WIDTH_QUERY);

  const findFirstReadyStep = useCallback(() => {
    const readyIndex = stepperData.findIndex(({ state }) => state === "ready");
    return readyIndex === -1 ? stepperData.length : readyIndex;
  }, [stepperData]);

  const getNextReadyIndex = useCallback((index: number, array: StepType[]) => {
    const remainingArray = array.slice(index + 1);
    const readyIndex = remainingArray.findIndex(
      (step) => step.state === "ready"
    );
    return readyIndex !== -1 ? readyIndex + index + 1 : array.length;
  }, []);

  const [activeStep, setActiveStep] = useState<number>(findFirstReadyStep());

  const handleNext = (): void => {
    if (onNextStep(activeStep)) {
      const nextReadyIndex = getNextReadyIndex(activeStep, stepperData);
      setActiveStep(nextReadyIndex);
    }
  };

  const handleFinish = (): void => {
    onFinish();
    setActiveStep(findFirstReadyStep());
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isMobile ? (
        <MobileStepperView
          activeStep={activeStep}
          handleNext={handleNext}
          stepperData={stepperData}
          handleFinish={handleFinish}
        />
      ) : (
        <WebStepper
          activeStep={activeStep}
          stepperData={stepperData}
          handleNext={handleNext}
          handleFinish={handleFinish}
        />
      )}
      {activeStep !== stepperData.length && renderStepsContent(activeStep)}
    </Box>
  );
}

export default memo(ResponsiveStepper);