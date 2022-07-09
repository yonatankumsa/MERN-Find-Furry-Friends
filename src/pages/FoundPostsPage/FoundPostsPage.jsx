import PetCard from "../../components/PetCard/PetCard";
import { useState } from "react";
import { Card, Input, Dropdown } from "semantic-ui-react";

export default function FoundPostsPage({ posts }) {
  // data with postType=Found
  const foundData = posts.filter((p) => p.postType === "Found");

  const [searchContent, setSearchContent] = useState("animalType");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const options = [
    { key: "animalType", text: "Animal Type", value: "animalType" },
    { key: "lastAddress", text: "Last Found Address", value: "lastAddress" },
    { key: "reward", text: "Reward", value: "reward" },
  ];

  function handleOptions(e, data) {
    setSearchContent(data.value);
  }

  function searchItem(value) {
    setSearchInput(value);
    if (searchInput !== 0) {
      const filteredData = foundData.filter((post) => {
        return Object.values(post[searchContent])
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    }
  }

  return (
    <>
      <h1>Found Posts</h1>
      <Input
        action={
          <Dropdown
            button
            basic
            floating
            options={options}
            defaultValue="animalType"
            onChange={handleOptions}
          />
        }
        icon="search"
        iconPosition="left"
        placeholder="Search..."
        onChange={(e) => {
          searchItem(e.target.value);
        }}
      />
      <div></div>
      {foundData.length ? (
        <div>
          <Card.Group>
            {searchInput.length === 0
              ? foundData.map((post) => {
                  return <PetCard key={post._id} post={post} />;
                })
              : filteredResults.map((post) => {
                  return <PetCard key={post._id} post={post} />;
                })}
          </Card.Group>
        </div>
      ) : (
        <h2>No Found Post</h2>
      )}
    </>
  );
}
