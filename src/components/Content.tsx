import React from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'
import CommentForm from './CommentForm';
import SelectSkills from '../pages/SelectSkills'
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import BasicForm from '../pages/BasicForm';


function getSteps() {
    return [
        'フォーム　1',
        'フォーム　2',
        'フォーム　3'
    ];
}





export default function Content() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <BasicForm handleNext={handleNext} />;
            case 1:
                return 'フォーム　2 のコンテンツを表示';
            case 2:
                return 'フォーム　3 のコンテンツを表示';
            default:
                return 'Unknown stepIndex';
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <div>
                        <Typography >全ステップの表示を完了</Typography>
                        <Button onClick={handleReset}>リセット</Button>
                    </div>
                ) : (
                    <div>
                        <Typography >{getStepContent(activeStep)}</Typography>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            戻る
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? '送信' : '次へ'}
                        </Button>
                    </div>
                )}
            </Grid>
        </Grid>
    )
}

