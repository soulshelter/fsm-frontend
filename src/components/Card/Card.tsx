import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/fsm-frontend/components/cardStyle";


interface Props {
  className: string;
  plain?: string;
  profile?: string;
  blog?: boolean;
  raised?: boolean;
  background?: boolean;
  pricing?: boolean;
  testimonial?: boolean;
  color: "primary" | "info" | "success" | "warning" | "danger" | "rose";
  product?: boolean;
  children?: React.ReactNode;
}

const useStyles = makeStyles(styles);

export default function Card(props: Props) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    ...rest
  } = props;
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
