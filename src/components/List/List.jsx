import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = () => {
    const classes = useStyles();
    const [rating, setRating] = useState('');
    
    const places = [
        { name: 'Aspava'},
        { name: 'Köroğlu'},
        { name: 'Kardeşler Pide'},
        { name: 'Ocakbaşı'},
        { name: 'Zeugma Künefe'},
        { name: 'Devrez'},
    ]
    
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) =>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
                
            </Grid>
        </div>
    );
}

export default List;