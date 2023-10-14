import TabContainer from "./components/TabContainer";
import books from "../../src/app/data/books.json";

async function getData() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_KEY}`,
    },
  };
  const collectionIds = [35861134, 35861132, 35861131, 35861130, 35904862];
  const results = [];

  for (let id of collectionIds) {
    let res = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${id}`,
      options
    );

    // if (!res.ok) {
    //   throw new Error("Failed to fetch data");
    // }

    const data = await res.json();
    results.push(data);
  }
  results.push(books);

  return results;
}

const Home = async () => {
  const bookmarks = await getData();

  return (
    <main className="flex flex-col items-center justify-between px-4 p-1">
      <div className="flex w-full flex-col items-center justify-center font-sans">
        <TabContainer bookmarks={bookmarks} />
      </div>
    </main>
  );
};

export default Home;
