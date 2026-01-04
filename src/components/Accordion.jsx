import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function AccordionComp() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container maxWidth="md" className='pt-20'>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails className="text-center">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails className="text-center">
            <Switch {...label} value={checked} onChange={handleChange} defaultChecked className='text-green-700'/>
          </AccordionDetails>
        </Accordion>
      </div>
      <Collapse in={checked} collapsedSize={40}>
        <div className='w-full h-75 bg-orange-500 text-center'>
          <h1 className="text-2xl font-bold">Welcom</h1>
        </div>
      </Collapse>
    </Container>
  );
}