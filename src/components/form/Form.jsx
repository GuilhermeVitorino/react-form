import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddressData from './AddressData';
import PesonalData from './PersonalData';
import Userdata from './UserData';

function Form({ onSubmitForm }) {

  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setData] = useState(0);

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onSubmitForm(collectedData);
    }
  })

  const forms = [
    <Userdata onSubmitForm={collectData} />,
    <PesonalData onSubmitForm={collectData} />,
    <AddressData onSubmitForm={collectData} />,
    <Typography variant="h5"> Thanks for register!</Typography>
  ];

  function collectData(data) {
    setData({ ...collectedData, ...data });
    console.log(collectedData);
    next();
  }

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Personal</StepLabel></Step>
        <Step><StepLabel>Address</StepLabel></Step>
        <Step><StepLabel>Finish</StepLabel></Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default Form;