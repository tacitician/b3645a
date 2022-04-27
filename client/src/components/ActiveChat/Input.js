import React, { useState } from "react";
import { FormControl, IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
    maxWidth: "100%",
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0px 16px",

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "none",
    },
  },
  "input-image-grid": {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr))",
    gridAutoRows: "100px",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",

    paddingBottom: "16px",
    paddingTop: "16px",
    "& img": {
      width: "auto",
      maxHeight: "100px",
    },
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments,
    };
    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const url = process.env.REACT_APP_CLOUDINARY_URL;
    const formDatum = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const formData = new FormData();
      formData.append("file", event.target.files[i]);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
      const uninterceptedAxiosInstance = axios.create();
      const req = uninterceptedAxiosInstance.post(url, formData, {
        transformRequest: [
          (data, headers) => {
            delete headers.common["Authorization"];
            return data;
          },
        ],
      });
      formDatum.push(req);
    }
    const responses = await Promise.all(formDatum);
    const attachments = responses.map((response) => response.data.secure_url);

    setAttachments((prevFiles) => [...prevFiles, ...attachments]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <TextField
          classes={{ root: classes.input }}
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <>
                <label>
                  <IconButton aria-label="upload" component="label">
                    <FileCopyOutlinedIcon />
                    <input
                      type="file"
                      multiple
                      hidden
                      accept="image/*"
                      onChange={handleUpload}
                    />
                  </IconButton>
                </label>
              </>
            ),
          }}
        />
      </FormControl>
    </form>
  );
};

export default Input;
