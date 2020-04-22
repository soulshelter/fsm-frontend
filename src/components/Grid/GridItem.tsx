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
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */
  }
});

const useStyles = makeStyles(styles);

export default function GridItem(props: Props) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};


