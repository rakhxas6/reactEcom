import React from 'react'
import "./newsletter.css"
import Button from "@mui/material/Button";

import { SendOutlined } from "@mui/icons-material";

const NewsLetter = () => {
  return (
    <div className="newsLetterBanner">
      <SendOutlined />
      <input type="text" placeholder="Your email address" />
      <Button className="bg-green">Subscribe</Button>
    </div>
  );
}

export default NewsLetter