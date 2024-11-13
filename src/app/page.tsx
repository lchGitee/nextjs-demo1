import { Suspense, use } from "react";
async function getMassage() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
const MassageCom = () => {
  const massage = use(getMassage());
  return (
    <div>
      <h2>这是Home页面</h2>
      <h1>massage:{massage}</h1>
    </div>
  );
};
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MassageCom />
    </Suspense>
  );
}
