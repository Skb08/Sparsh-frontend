import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ContactData } from "./ContactData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactUs() {
  return (
    <>
      <Navbar />
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
                      2nd Year Under Graguate, NIT Rourkela
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
