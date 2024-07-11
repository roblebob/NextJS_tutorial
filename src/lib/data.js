// TEMPORARY DATA
const user = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
];
const posts = [
    {id: 1, title: "Post 1", body: "Body 1", userId: 1},
    {id: 2, title: "Post 2", body: "Body 2", userId: 2},
    {id: 3, title: "Post 3", body: "Body 3", userId: 1},
    {id: 4, title: "Post 4", body: "Body 4", userId: 2},
];


export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    return posts.find((post) => post.id == id); 
}

export const getUser = async (id) => {
    return user.find(user => user.id === id);
}