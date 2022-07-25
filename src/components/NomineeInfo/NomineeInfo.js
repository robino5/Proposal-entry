import React, { useState } from "react";
import { Container, Grid, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';

export default function NomineeInfo() {
    const [nomineeInfo1, setNomineeInfo1] = useState([{}]);
    const [nomineeInfo2, setNomineeInfo2] = useState([{}]);
    const [nomineeInfo3, setNomineeInfo3] = useState([{}]);

    const handleNomineeInfo1Add = () => {
        setNomineeInfo1([...nomineeInfo1, {}]);
    };
    const handleNomineeInfo2Add = () => {
        setNomineeInfo2([...nomineeInfo2, {}]);
    };
    const handleNomineeInfo3Add = () => {
        setNomineeInfo3([...nomineeInfo3, {}]);
    };
    return (
        <div>
            <p>Nominee Informmation 1</p>
            <button type="button" onClick={handleNomineeInfo1Add} className="add-btn">
                <span>Add More</span>
            </button>
            {nomineeInfo1.map((nomineeInfo1, index) => (
                <div key={index}>
                    <Box sx={{ mt: 1 }} />
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="Nominee Name" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id="Varification_label" size="small">Relation</InputLabel>
                                <Select
                                    labelId="Varification_label"
                                    id="p_type"
                                    label="Relation"
                                    size="small" >
                                    <MenuItem ></MenuItem>
                                    <MenuItem ></MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1}>
                            <FormControl fullWidth>
                                <InputLabel id="Varification_label" size="small">Sex</InputLabel>
                                <Select
                                    labelId="Varification_label"
                                    id="p_type"
                                    label="Sex"
                                    size="small" >
                                    <MenuItem ></MenuItem>
                                    <MenuItem ></MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1}>
                            <TextField id="standard-basic" fullWidth label="Share %" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="Father Name" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="Mother Name" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="Spouse Name" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                </div>
            ))}
            <br></br>
            <p>Nominee Informmation 2</p>
            <button type="button" onClick={handleNomineeInfo2Add} className="add-btn">
                <span>Add More</span>
            </button>
            {nomineeInfo2.map((setNomineeInfo2, index) => (
                <div key={index}>
                    <Box sx={{ mt: 1 }} />
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id="Varification_label" size="small">Occupation</InputLabel>
                                <Select
                                    labelId="Varification_label"
                                    id="p_type"
                                    label="Relation"
                                    size="small" >
                                    <MenuItem ></MenuItem>
                                    <MenuItem ></MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="DOB" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField id="standard-basic" fullWidth label="Age" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField id="standard-basic" fullWidth label="Month" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="Present Address" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="permanent Address" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="standard-basic" fullWidth label="NID No" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                </div>
            ))}
            <br></br>
            <p>Nominee Informmation 3</p>
            <button type="button" onClick={handleNomineeInfo3Add} className="add-btn">
                <span>Add More</span>
            </button>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    {nomineeInfo3.map((nomineeInfo3, index) => (
                        <div key={index}>
                            <Box sx={{ mt: 1 }} />
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <TextField id="standard-basic" fullWidth label="Telephone(Home)" variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField id="standard-basic" fullWidth label="Telephone(Office)" variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField id="standard-basic" fullWidth label="Mobile No." variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField id="standard-basic" fullWidth label="Fax No." variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField id="standard-basic" fullWidth label="Email Address" variant="outlined" size="small" />
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ mt: 1 }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" fullWidth label="Proposal" variant="outlined" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" fullWidth label="Policy" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}