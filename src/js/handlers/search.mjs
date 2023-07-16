import { renderSidebarItems } from "../templates/sidebar.mjs";

// Filters posts based on the search term
function filterPosts(posts, term) {
  return posts.filter((post) => {
    const title = post.title.rendered.toLowerCase();
    const excerpt = post.excerpt.rendered.toLowerCase();
    const content = post.content.rendered.toLowerCase();
    const author = post._embedded.author[0].name.toLowerCase();

    return (
      title.includes(term) ||
      excerpt.includes(term) ||
      content.includes(term) ||
      author.includes(term)
    );
  });
}

// Handles the search input and renders the filtered posts
export function searchHandler(posts, container, event) {
  event.preventDefault();
  const term = event.target.value.toLowerCase();
  if (term.length > 2) {
    const filteredPosts = filterPosts(posts, term);
    renderSidebarItems(filteredPosts, container);
  } else {
    renderSidebarItems(posts, container);
  }
}
