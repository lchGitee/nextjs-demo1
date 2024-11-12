"use client";
import Button from "@mui/material/Button";
import { useState } from "react";
const TestPage = () => {
  const [data, setData] = useState("");
  async function getData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+"api/test");
    const resData = await res.json();
    setData(resData);
  }
  return (
    <>
      <div>This is a test page.</div>
      <Button onClick={getData}>获取数据</Button>
      <div>{data}</div>
    </>
  );
};
export default TestPage;
