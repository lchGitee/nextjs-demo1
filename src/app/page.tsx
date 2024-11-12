import { use } from "react";
async function getMassage() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+"api");
    const data = await response.json();
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
      <h1>massage:{massage}</h1>
    </div>
  );
}
