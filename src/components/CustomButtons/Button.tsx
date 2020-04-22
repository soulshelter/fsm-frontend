import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/fsm-frontend/components/buttonStyle";

interface Props {
  color: "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "twitter" | "facebook" | "google" | "linkedin" | "pinterest" | "youtube" | "tumblr" | "github" | "behance" | "dribbble" | "reddit" | "instagram" | "transparent";
  size: "sm" | "lg";
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  fileButton?: boolean;
  children?: React.ReactNode;
  className: string;
};


const useStyles = makeStyles(styles);

const RegularButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    ...rest
  } = props;
  const classes = useStyles();
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

export default RegularButton;
