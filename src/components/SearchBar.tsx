import React, { useState } from "react";

type props = {
  onFormSubmit(term: string): void;
};

export const SearchBar = ({ onFormSubmit }: props) => {
  const [term, setTerm] = useState("");

  const onCurrentFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={(e) => onCurrentFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

//AIzaSyCHeqFNxFxR0oKTTdh7LmbDpXkt4zXFJ1M
