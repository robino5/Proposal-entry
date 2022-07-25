import React, { useState } from "react";
import { Grid, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, } from '@mui/material';

export default function ProposalBasic() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField id="standard-basic" fullWidth label="Table" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" fullWidth label="Term" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="standard-basic" fullWidth label="Plan Name" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Extra Sum Risk" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <TextField id="standard-basic" fullWidth label="Pension/Premium/Annuity/unit" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <TextField id="standard-basic" fullWidth label="Sum Assured" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Life Premium Instalment" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="Varification_label" size="small">Mode of Payment</InputLabel>
                        <Select
                            labelId="Varification_label"
                            id="p_type"
                            label="Mode of Payment"
                            size="small" >
                            <MenuItem value={"R"}>Regular</MenuItem>
                            <MenuItem value={"T"}>Transfer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="Varification_label" size="small">Policy option</InputLabel>
                        <Select
                            labelId="Varification_label"
                            id="p_type"
                            label="Policy option"
                            size="small" >
                            <MenuItem value={"R"}>Regular</MenuItem>
                            <MenuItem value={"T"}>Transfer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Risk Premium Instalment" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="Varification_label" size="small">Bonus option</InputLabel>
                        <Select
                            labelId="Bonus Option "
                            id="p_type"
                            label="Bonus option"
                            size="small" >
                            <MenuItem value={"R"}>Regular</MenuItem>
                            <MenuItem value={"T"}>Transfer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="Varification_label" size="small">Standard/Sub Standard?</InputLabel>
                        <Select
                            labelId="Varification_label"
                            id="p_type"
                            label="Standard/Sub Standard?"
                            size="small" >
                            <MenuItem value={"R"}>Regular</MenuItem>
                            <MenuItem value={"T"}>Transfer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Annual Premium" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel id="Varification_label" size="small">Medical/Non-Medical?</InputLabel>
                        <Select
                            labelId="Varification_label"
                            id="p_type"
                            label="Medical/Non-Medical?"
                            size="small" >
                            <MenuItem value={"R"}>Regular</MenuItem>
                            <MenuItem value={"T"}>Transfer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <TextField id="standard-basic" fullWidth label="Extra Mortality" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Risk Premium" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <TextField id="standard-basic" fullWidth label="Lien code" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={5}>
                    <TextField id="standard-basic" fullWidth label="Lien Percentage" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Sum at Risk" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={10}>

                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Suspence" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <TextField id="standard-basic" error fullWidth label="Total Premium" variant="outlined" size="small" />
                </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Comm Date" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Age: Payer" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Basic Rate(%)" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Premno" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Next Deo Date" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Child Age" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Risk Rate(%)" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" fullWidth label="Extra Paid" variant="outlined" size="small" />
                </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="right">Code&nbsp;</TableCell>
                                    <TableCell align="right">Sumass&nbsp;</TableCell>
                                    <TableCell align="right">Premium&nbsp;</TableCell>
                                    <TableCell align="right">Type&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Suppl-1</TableCell>
                                    <TableCell align="right">
                                        <FormControl fullWidth>
                                            <InputLabel id="Varification_label" size="small">Medical/Non-Medical?</InputLabel>
                                            <Select
                                                labelId="Varification_label"
                                                id="p_type"
                                                label="Medical/Non-Medical?"
                                                size="small" >
                                                <MenuItem value={"R"}>Regular</MenuItem>
                                                <MenuItem value={"T"}>Transfer</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField id="standard-basic" fullWidth label="Extra Paid" variant="outlined" size="small" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField id="standard-basic" fullWidth label="Extra Paid" variant="outlined" size="small" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField id="standard-basic" fullWidth label="Extra Paid" variant="outlined" size="small" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </div>
    )

}