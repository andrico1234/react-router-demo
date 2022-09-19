import { Form } from "react-router-dom";

export function Root() {
  return (
    <main>
      <div className="door door-left">
        <Form method="get" action="/searchResults" role="search">
          <input
            id="q"
            aria-label="Search users"
            placeholder="Search"
            type="search"
            name="q"
          />
          <button type="submit">Search</button>
        </Form>
      </div>
      <div className="door door-right" />
    </main>
  );
}

// clicking the link redirects to the next page
