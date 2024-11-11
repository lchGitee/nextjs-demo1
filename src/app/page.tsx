import { use } from "react";
async function getMassage() {
  try {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    console.log(data,'data');
    return data;
  } catch (e) {
    console.log(e);
  }
}
export default function Home() {
  const massage = use(getMassage());
  return (
    <div>
      <h2>这是Home页面</h2>
      <h1>massage:{massage.message}</h1>
    </div>
  );
}
