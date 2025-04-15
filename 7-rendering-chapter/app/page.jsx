import Button from "./button";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
};

async function page() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Rendering</h1>
      Page
      <Button />
      <h2>Data Fetching</h2>
    </div>
  );
}

export default page;
