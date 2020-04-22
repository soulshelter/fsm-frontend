import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/fsm-frontend/components/cardAvatarStyle";

interface Props {
  children?: React.ReactNode;
  className: string;
  profile?: boolean;
  plain?: boolean;
  testimonial?: boolean;
  testimonialFooter?: boolean;
}

const useStyles = makeStyles(styles);

export default function CardAvatar(props: Props) {
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;
  const classes = useStyles();
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}