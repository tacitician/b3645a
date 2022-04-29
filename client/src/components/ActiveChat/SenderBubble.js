import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const SenderBubble = ({ time, text, attachments, classes }) => {
  if (
    attachments.length === 0 ||
    attachments === null ||
    !attachments?.length
  ) {
    return (
      <Box className={classes["sender-root"]}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes["sender-bubble"]}>
          <Typography className={classes["sender-text"]}>{text}</Typography>
        </Box>
      </Box>
    );
  }

  if (attachments.length > 1) {
    return (
      <Box className={classes["sender-root"]}>
        <Box className={classes["sender-bubble"]}>
          <Typography className={classes["sender-text"]}>{text}</Typography>
        </Box>
        <Grid className={classes["sender-grid"]}>
          {attachments?.map((attachment) => (
            <Box key={attachment}>
              <img
                src={attachment}
                alt={"A chat message attachment"}
                className={`${classes.attachment} ${classes.attachments}`}
              />
            </Box>
          ))}
        </Grid>
        <Typography
          className={`${classes.date} ${classes["multiple-image-data"]}`}
        >
          {time}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={classes["sender-root"]}>
      <Typography className={classes.date}>{time}</Typography>
      <Grid className={classes.container}>
        <img
          key={attachments[0]}
          src={attachments[0]}
          alt={"A chat message attachment"}
          className={classes.attachment}
        />
        {text && (
          <Box
            className={`${classes["sender-bubble"]} ${classes["single-text-with-attachment"]}`}
          >
            <Typography className={classes["sender-text"]}>{text}</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default SenderBubble;
