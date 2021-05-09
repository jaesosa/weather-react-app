import React from "react";

export default function Search() {
  return (
    <form className="Search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            id="search-text-input"
            placeholder="Enter your city. . ."
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <button type="submit" class="btn btn-secondary w-100" value="Search">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}