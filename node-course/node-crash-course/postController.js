const posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post three'},
    {id: 4, title: 'Post four'},
    {id: 5, title: 'Post five'},
]

const getPosts = () => posts; 

export const getPostsLength = () => posts.length; 

// export {getPosts};
export default getPosts; 