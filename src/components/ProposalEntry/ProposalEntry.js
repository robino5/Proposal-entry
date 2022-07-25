import React, { useState } from "react";
import StepNavigation from '../Nabigation/StepNavigation';
import { Container, Grid, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, } from '@mui/material';
import ProposalInfo from "../ProposalInfo/ProposalInfo";
import ProposalBasic from "../PolicyBasic/PolicyBasic";
import NomineeInfo from "../NomineeInfo/NomineeInfo";

export default function ProposalEntry() {
  const labelArray = ['Personal Info', 'Policy Basic', 'Nominee', 'PR/BM', 'Step 5'];
  const [currentSetp, updateCurrentSetup] = useState(1);
 
  function updateStep(step) {
    updateCurrentSetup(step);
  }


  return (
    <div>
      <h1>Proposal Entry</h1>
      <StepNavigation labelArray={labelArray} currentSetp={currentSetp} updateStep={updateStep}></StepNavigation>

      <Container>
        <div hidden={currentSetp !== 1 ? true : false}>
        <ProposalInfo></ProposalInfo>
        </div>
        <div hidden={currentSetp !== 2 ? true : false}>
      <ProposalBasic></ProposalBasic>
        </div>
        <div hidden={currentSetp !== 3 ? true : false}>
         <NomineeInfo></NomineeInfo>
        </div>
        <div hidden={currentSetp !== 4 ? true : false}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField id="standard-basic" fullWidth label="FA Code" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={8}>
                  <TextField id="standard-basic" fullWidth label="Name" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="standard-basic" fullWidth label="Project Code" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={8}>
                  <TextField id="standard-basic" fullWidth label="Project Name" variant="outlined" size="small" />
                </Grid>
              </Grid>
              <Box sx={{ m: 2 }} />
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Varification_label" size="small">S/C Code</InputLabel>
                  <Select
                    labelId="Varification_label"
                    id="p_type"
                    label="S/C Code"
                    size="small" >

                  </Select>
                </FormControl>
              </Grid>
              <Box sx={{ m: 2 }} />
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="Varification_label" size="small">Branch/Agency</InputLabel>
                  <Select
                    labelId="Varification_label"
                    id="p_type"
                    label="Branch/Agency"
                    size="small" >

                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="Setup" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="GN" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="UM" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="DIVC" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="BM" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="AVP/ACP" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="AGM" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="FVP/DCM" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="AGM" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" fullWidth label="VP/CM" variant="outlined" size="small" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Proposal No" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Total Premium" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Suspense/Balance" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Policy No" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Total Deposit" variant="outlined" size="small" />
            </Grid>
          </Grid>
        </div>
      </Container>

      <button className='primary_button' onClick={() => updateStep(currentSetp - 1)} disabled={currentSetp === 1 ? true : false}>Previous</button>
      <button className='primary_button' onClick={() => updateStep(currentSetp + 1)} disabled={currentSetp === 5 ? true : false}>Next</button>
    </div>
  );
}