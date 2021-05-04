import React from "react";
import axios from "axios";

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
          />
        </div>
        <div className="col-3">
          <button type="submit" class="btn btn-secondary" value="Search">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}