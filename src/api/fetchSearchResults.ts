import { QueryFunction, QueryFunctionContext } from "@tanstack/react-query";
import { SearchResult } from "../types/searchResults";

interface Params {
  page?: number;
  pageSize?: number;
  query: string;
}

async function fetchSearchResults(params: Params): Promise<SearchResult[]> {
  const { page = 0, pageSize = 10, query } = params;

  const response = await fetch(`https://api.github.com/search/users?`);

  return response.json();
}

export default fetchSearchResults;
