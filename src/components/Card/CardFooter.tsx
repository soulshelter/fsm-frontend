import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/fsm-frontend/components/cardFooterStyle";

const useStyles = makeStyles(styles);

interface Props {
  className: string;
  plain?: boolean;
  profile?: boolean;
  pricing?: boolean;
  testimonial?: boolean;
  children?: React.ReactNode;
};


export default function CardFooter(props: Props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    ...rest
  } = props;
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}
