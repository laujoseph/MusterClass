import { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import axios from "axios";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [access, setAccess] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = () => {
    console.log(title, imageUrl, content, access, category);
    axios.post("http://localhost:8080/articles/create", {
      title: title,
      imageUrl: imageUrl,
      content: content,
      access: access,
      category: category,
    });
    alert("Successfully created Article!");
  };
  return (
    <Stack sx={{ margin: "auto", marginBottom: 20 }}>
      <Typography
        sx={{ margin: "auto", marginBottom: 2 }}
        color="common.white"
        variant="h2"
      >
        Create Article
      </Typography>
      <TextField
        id="outlined-textarea"
        label="Title"
        placeholder="Course Title"
        variant="filled"
        sx={{
          backgroundColor: "white",
          margin: "auto",
          minWidth: 500,
          marginBottom: 2,
        }}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Image URL"
        placeholder="imageUrl"
        variant="filled"
        sx={{
          backgroundColor: "white",
          margin: "auto",
          minWidth: 500,
          marginBottom: 2,
        }}
        onChange={(event) => {
          setImageUrl(event.target.value);
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Content"
        placeholder="Course details"
        variant="filled"
        sx={{
          backgroundColor: "white",
          margin: "auto",
          minWidth: 500,
          marginBottom: 2,
        }}
        multiline
        rows={4}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <FormControl
        sx={{ backgroundColor: "white", margin: "auto" }}
        variant="filled"
      >
        <InputLabel id="demo-simple-select-label">Access</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Access"
          sx={{ backgroundColor: "white", margin: "auto", minWidth: 500 }}
          defaultValue=""
          onChange={(event) => {
            setAccess(event.target.value);
            console.log(event.target.value);
          }}
        >
          <MenuItem value={"Basic"}>Basic</MenuItem>
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value={"Premium"}>Premium</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ backgroundColor: "white", margin: "auto" }}
        variant="filled"
      >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          sx={{ backgroundColor: "white", margin: "auto", minWidth: 500 }}
          defaultValue=""
          onChange={(event) => {
            setCategory(event.target.value);
            console.log(event.target.value);
          }}
        >
          <MenuItem value={"Food"}>Food</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Sports"}>Sports</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleClick}>Submit</Button>
    </Stack>
  );
};

export default CreateArticle;