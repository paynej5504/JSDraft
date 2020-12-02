//import statements
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../../App.module.css"

// alert box styles
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function AlertBox({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
//returns alert
  return (
    //creates the alert and sets options for the alert along with what the alert will say
    <div className={classes.root}>
      <Collapse in={open}>
        
        <Alert className={styles.alert}
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {children}
          Caution: numbers are quickly changing and may not be accurate
        </Alert>
      </Collapse>
    </div>
  );
}

