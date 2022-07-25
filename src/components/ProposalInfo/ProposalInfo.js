import React, { useState } from "react";
import {  Grid, TextField, Select, FormControl, InputLabel, MenuItem, Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function ProposalInfo() {
    const [varification_mode, setVarification] = useState('');
    const [Per_add, setPerAdd] = useState({ per_house: '', per_road: '', per_thana: '', per_district: '', per_pcode: '' });
    const [Pre_add, setPreAdd] = useState({ pre_house: '', pre_road: '', pre_thana: '', pre_district: '', pre_pcode: '' });

    const handleChange = (event) => {
        setVarification(event.target.value);
      };
    

    const handleInput = (e) => {
        setPerAdd({ ...Per_add, [e.target.id]: e.target.value });
      }

      const handleSubmit = () => {
        setPreAdd({
          pre_house: Per_add.per_house,
          pre_road: Per_add.per_road,
          pre_thana: Per_add.per_thana,
          pre_district: Per_add.per_district,
          pre_pcode: Per_add.per_pcode
        });
    }

    return(
        <div>
             <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField id="standard-basic" fullWidth label="Proposal No." variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Proposal Date" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Comm. Date" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Policy Holder" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <TextField id="standard-basic" fullWidth label="Proposal Office" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="standard-basic" fullWidth label="Office Code" variant="outlined" size="small" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TextField id="standard-basic" fullWidth label="Date Of Birth" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Father" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Mother" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Spouse" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Nationality" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
            </Grid>
            <Grid item xs={4}>
              <TextField id="standard-basic" fullWidth label="Mobile" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Home Phone" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Office Phone" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Fax" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Email" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ mb: 5 }} />
              <FormControl fullWidth>
                <InputLabel id="Varification_label" size="small">Varification Mode</InputLabel>
                <Select
                  labelId="Varification_label"
                  id="varification_mode"
                  label="Varification Mode"
                  size="small"
                  value={varification_mode}
                  onChange={handleChange}
                >
                  <MenuItem value={"NI"}>National Id</MenuItem>
                  <MenuItem value={"PN"}>Passport No.</MenuItem>
                  <MenuItem value={"BC"}>Birth Certificate</MenuItem>
                  <MenuItem value={"E"}>E-TIN</MenuItem>
                  <MenuItem value={"DL"}>Driving License</MenuItem>
                  <MenuItem value={"O"}>Others</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ mb: 1 }} />

              <div hidden={varification_mode !== "NI" ? true : false}>
                <TextField id="standard-basic" fullWidth label="National Id" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
              <div hidden={varification_mode !== "PN" ? true : false}>
                <TextField id="standard-basic" fullWidth label="Passport No." variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
                <TextField id="standard-basic" fullWidth label="Expiration date" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
              <div hidden={varification_mode !== "BC" ? true : false}>
                <TextField id="standard-basic" fullWidth label="Birth Certificate" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
              <div hidden={varification_mode !== "E" ? true : false}>
                <TextField id="standard-basic" fullWidth label="E-TIN" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
              <div hidden={varification_mode !== "DL" ? true : false}>
                <TextField id="standard-basic" fullWidth label="Passport No." variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
                <TextField id="standard-basic" fullWidth label="Expiration date" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
              <div hidden={varification_mode !== "O" ? true : false}>
                <TextField id="standard-basic" fullWidth label="Others" variant="outlined" size="small" />
                <Box sx={{ mb: 1 }} />
              </div>
            </Grid>
            <Grid item xs={4}>

              <Box sx={{ mb: 1 }} />
              <p>Permanent Address</p>
              <Box sx={{ mb: 2 }} />
              <TextField id="per_house" name="per_house" fullWidth label="House/Village" variant="outlined" size="small" onChange={handleInput} />
              <Box sx={{ mb: 1 }} />
              <TextField id="per_road" name="per_road" fullWidth label="Road/Block" variant="outlined" size="small" onChange={handleInput} />
              <Box sx={{ mb: 1 }} />
              <TextField id="per_thana" name="per_thana" fullWidth label="Thana" variant="outlined" size="small" onChange={handleInput} />
              <Box sx={{ mb: 1 }} />
              <TextField id="per_district" name="per_district" fullWidth label="District" variant="outlined" size="small" onChange={handleInput} />
              <Box sx={{ mb: 1 }} />
              <TextField id="per_pcode" name="per_pcode" fullWidth label="Post Code" variant="outlined" size="small" onChange={handleInput} />
              <Box sx={{ mb: 1 }} />
            </Grid>
            <Grid item xs={4}>
              <p>Present Address <Button size="small" onClick={handleSubmit} variant="outlined">Same as</Button></p>
              <Box sx={{ mb: 1 }} />
              <TextField id="pre_house" name="pre_house" fullWidth label="House/Village" variant="outlined" size="small" value={Pre_add.pre_house} />
              <Box sx={{ mb: 1 }} />
              <TextField id="pre_road" name="pre_road" fullWidth label="Road/Block" variant="outlined" size="small" value={Pre_add.pre_road} />
              <Box sx={{ mb: 1 }} />
              <TextField id="pre_thana" name="pre_thana" fullWidth label="Thana" variant="outlined" size="small" value={Pre_add.pre_thana} />
              <Box sx={{ mb: 1 }} />
              <TextField id="pre_district" name="pre_district" fullWidth label="District" variant="outlined" size="small" value={Pre_add.pre_district} />
              <Box sx={{ mb: 1 }} />
              <TextField id="pre_pcode" name="pre_pcode" fullWidth label="Post Code" variant="outlined" size="small" value={Pre_add.pre_pcode} />
              <Box sx={{ mb: 1 }} />
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Occupation" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Ocup Details" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Sex" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Area" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <FormControl fullWidth>
                <InputLabel id="Varification_label" size="small">Education</InputLabel>
                <Select
                  labelId="Varification_label"
                  id="Education"
                  label="Education"
                  size="small" >
                  <MenuItem value={"VII"}>VII</MenuItem>
                  <MenuItem value={"X"}>IX-X</MenuItem>
                  <MenuItem value={"SSC"}>SSC/Equivalent</MenuItem>
                  <MenuItem value={"HSC"}>HSC/Equivalent</MenuItem>
                  <MenuItem value={"G"}>Graduation</MenuItem>
                  <MenuItem value={"PG"}>Post Graduation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField id="standard-basic" fullWidth label="Age" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="DOB Area" variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Age Proof" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="Varification_label" size="small">Policy Type</InputLabel>
                <Select
                  labelId="Varification_label"
                  id="p_type"
                  label="Policy Type"
                  size="small" >
                  <MenuItem value={"R"}>Regular</MenuItem>
                  <MenuItem value={"T"}>Transfer</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ mb: 1 }} />
              <TextField id="standard-basic" fullWidth label="Policy No." variant="outlined" size="small" />
              <Box sx={{ mb: 1 }} />
            </Grid>
          </Grid>
        </div>
    )




}