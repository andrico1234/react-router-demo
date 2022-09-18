import { useQuery } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import fetchSearchResults from "../api/fetchSearchResults";
import { SearchResult } from "../types/searchResults";

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";

  const searchResults = fetchSearchResults({ query });
};

export function SearchResults() {
  return (
    <>
      <div id="sidebar">
        <h1>GitHub Stuff</h1>
        <div></div>
      </div>
      <div id="detail"></div>
    </>
  );
}
