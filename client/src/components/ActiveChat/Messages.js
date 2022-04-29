import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  "multiple-image-data": {
    paddingTop: "4px",
  },
  "single-text-with-attachment": {
    marginTop: "-37px",
    zIndex: "2",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    inlineSize: "100%",
    wordBreak: "break-all",
  },
  attachment: {
    maxWidth: "100%",
    maxHeight: "150px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  attachments: {
    maxHeight: "100px",
    alignSelf: "flex-end",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    "& img": {
      objectFit: "cover",
    },
  },
  "sender-grid": {
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "flex-end",

    "& img": {
      width: "auto",
      maxHeight: "100px",
    },
  },
  "sender-root": {
    display: "flex",
    flexDirection: "column",
    isolation: "isolate",
    maxWidth: "100%",
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  "sender-text": {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  "sender-bubble": {
    position: "relative",
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  "other-root": {
    display: "flex",
  },
  "other-bubble": {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  "other-text": {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
  "other-grid": {
    display: "grid",
    gap: "10px",
    gridAutoFlow: "column",
  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message.attachments}
            classes={classes}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            attachments={message.attachments}
            classes={classes}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
