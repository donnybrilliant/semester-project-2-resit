import { readAll } from "../api/posts/read.mjs";
import { renderSidebarItems } from "../templates/sidebar.mjs";

export async function renderSidebar() {
  const container = document.querySelector("#postList");
  const form = document.querySelector("#searchForm");

  const posts = await readAll();
  renderSidebarItems(posts, container);

  // search, category, sort
  form.addEventListener("input", (event) => {
    const term = event.target.value.toLowerCase();
    if (term.length > 2) {
      const filteredPosts = posts.filter((post) => {
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
      renderSidebarItems(filteredPosts, container);
    } else {
      renderSidebarItems(posts, container);
    }
  });
}
