// Support function to check if the form is valid
export function checkForm(post) {
  if (post.excerpt == "") {
    delete post.excerpt;
  }

  if (post.categories == "") {
    post.categories = [1];
  }

  return post;
}
