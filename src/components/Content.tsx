import React from 'react'
import { Button} from '@mui/material'
import SelectSkills from '../pages/SelectSkills'
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import BasicForm from '../pages/BasicForm';
import Preview from './Preview';

function getSteps() {
    return [
        'フォーム　1',
        'フォーム　2',
        'フォーム　3'
    ];
}





export default function Content() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [name, setName] = React.useState("");
    const [twitter, setTwitter] = React.useState("");
    const [github, setGithub] = React.useState("");
    const [url, seturl] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [icon, setIcon] = React.useState("");
    const [skills, setSkills] = React.useState<Skill[]>([]);
    const steps = getSteps();

    

    type Skill = {
        id: number;
        skillid: number;
        name: string;
        rank: number;
        type: string;
    };

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <BasicForm name={name} twitter={twitter} github={github} url={url} comment={comment} icon={icon} namemethod={setName} twittermethod={setTwitter} githubmethod={setGithub} urlmethod={seturl} commentmethod={setComment} iconmethod={setIcon} />;
            case 1:
                return <SelectSkills method={setSkills}/>;
            case 2:
                //console.log(icon[0]);

                return <Preview name={name} twitter={twitter} github={github} url={url} comment={comment}  skills = {skills} icon={icon}/>;
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
            <Grid item sm={2}/>
            <Grid item lg={8} sm={8} >
                <Stepper activeStep={activeStep} alternativeLabel >
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

