const FIREBASE_DOMAIN = 'https://blogapp-78990-default-rtdb.firebaseio.com';

export async function getAllBlogs() {
  const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch blogs.');
  }

  const transformedBlogs = [];

  for (const key in data) {
    const blogObj = {
      id: key,
      ...data[key],
    };

    transformedBlogs.push(blogObj);
  }
  console.log(data, transformedBlogs)
  return transformedBlogs;
}

export async function getSingleBlog(blogId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/blogs/${blogId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: blogId,
    ...data,
  };

  return loadedQuote;
}

export async function addBlog(blogData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`, {
    method: 'POST',
    body: JSON.stringify(blogData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

// export async function addComment(commentData, quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`, {
//     method: 'POST',
//     body: JSON.stringify(commentData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not add comment.');
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not get comments.');
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }