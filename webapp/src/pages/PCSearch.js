import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CiSearch } from "react-icons/ci";
import Button from "react-bootstrap/Button";

function PCSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <>
      <main className="main w-100">
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search ..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{ width: "75%" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="ms-3">
          <Button variant="info" onClick={handleSearch}>Search</Button>
        </div>
      </main>
    </>
  );
}

export default PCSearch;
