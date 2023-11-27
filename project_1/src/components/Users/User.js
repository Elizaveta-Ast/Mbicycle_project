import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

const theme = createTheme();

function User({ user }) {
  const navigate = useNavigate();
  const matchesDesktop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xs={1} sm={matchesDesktop ? 1 : 4} >
      <div>
          <div className="user-container">
            <div className="user-image">
              <img id="img" src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
            </div>
            <div className="user-details">
              <h3>{user.firstName} {user.lastName}, {user.age} лет</h3>
              <p style={{color: "grey", marginBottom: "20px" }}>{user.job}</p>
              <p><b><i>БИО:</i></b> {user.bio}</p>
              <p style={{marginTop: "5px" }}><i><b>Цитата:</b></i> {user.quote}</p>
              <p style={{marginTop: "20px" }}><i>{user.country}, {user.city}</i></p>

            </div>
          </div>
      </div>
    </Grid>
    
);}

export default connect(null)(User);