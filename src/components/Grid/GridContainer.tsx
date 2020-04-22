import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

interface Props {
  children: React.ReactNode;
  className: string;
};

const styles = createStyles({
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
});

const useStyles = makeStyles(styles);

export default function GridContainer(props: Props) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};
