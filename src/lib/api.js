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
  return transformedBlogs.reverse();
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
export async function addTag(tag) {
  const response = await fetch(`${FIREBASE_DOMAIN}/tags.json`, {
    method: 'POST',
    body: JSON.stringify(tag),
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

export async function getTags() {
  const response = await fetch(`${FIREBASE_DOMAIN}/tags.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch blogs.');
  }

  const transformedTags = [];

  for (const key in data) {
    const blogObj = {
      id: key,
      ...data[key],
    };

    transformedTags.push(blogObj);
  }
  return transformedTags.reverse();
}