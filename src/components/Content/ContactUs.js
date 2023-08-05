import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { ContactData } from "./ContactData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactUs() {
  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '75%' },
          }}
          noValidate
          autoComplete="off"
        >
          <form className="contact-form"
            action="https://formspree.io/f/mbjenoln"
            method="POST"
          >
            <h1>Fill Out The Form</h1>

            <TextField autoComplete="off" required id="outlined-search" label="Enter Name" type="text" name="Fname" />
            <TextField autoComplete="off" required id="outlined-search" label="Enter Mail" type="email" name="email" />
            <TextField autoComplete="off" required id="outlined-multiline-flexible" label="Enter Text" name="message" multiline rows={4}/>
            <Button className="mt-4" type="submit" value="send" variant="contained">Submit</Button>
          </form>
        </Box>
      </div>

      <div className="ContactUs-Card">
        {ContactData.map((name, index) => {
          return (
            <div className="Contact-Cards">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={name.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      3rd Year Under Graguate, NIT Rourkela
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a href={name.reciever1}><LinkedInIcon /></a>
                  <a href={name.reciever2}><InstagramIcon /></a>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
