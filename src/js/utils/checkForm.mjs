export function checkForm(post) {
  if (post.excerpt == "") {
    delete post.excerpt;
  }

  if (post.categories == "") {
    post.categories = [1];
  }

  return post;
}
