import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/fsm-frontend/components/cardHeaderStyle";

const useStyles = makeStyles(styles);

interface Props {
  className: string;
  color?: "warning" | "success" | "danger" | "info" | "primary" | "rose";
  colorHeader: "warningCardHeader" | "successCardHeader" | "dangerCardHeader" | "infoCardHeader" | "primaryCardHeader" | "roseCardHeader";
  plain?: boolean;
  image?: boolean;
  contact?: boolean;
  signup?: boolean;
  noShadow?: boolean;
  children?: React.ReactNode;
}

export default function CardHeader(props: Props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow,
    colorHeader,
    ...rest
  } = props;
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[colorHeader]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
