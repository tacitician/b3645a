import React from "react";
import { Box, Grid, Typography, Avatar } from "@material-ui/core";

const OtherUserBubble = ({ text, time, otherUser, attachments, classes }) => {
  return (
    <Box className={classes["other-root"]}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.date}>
          {otherUser.username} {time}
        </Typography>
        {attachments && (
          <Grid fullwidth spacing="10px" className={classes["other-grid"]}>
            {attachments?.map((attachment) => (
              <img
                key={attachment}
                src={attachment}
                alt={"A chat message attachment"}
                style={{ maxWidth: "100%" }}
                className={classes.attachment}
              />
            ))}
          </Grid>
        )}
        <Box className={classes["other-bubble"]}>
          <Typography className={classes["other-text"]}>{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
