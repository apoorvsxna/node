// "type": "module" (in package.json)

const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'}
];

const getPosts = () => posts;

export { getPosts };

// OR-
// export const getPosts = () => posts;

// OR, to export as default-
// export default getPosts;



//  to use in another file
// import { getPosts } from './es-modules.js';
// console.log(getPosts());

// to use in another file if exporting as default
// import getPosts from './es-modules.js';
// console.log(getPosts());