import React, {useState, useMemo} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'a', body: 'f'},
        {id: 2, title: 'm', body: 'a'},
        {id: 3, title: 'b', body: 'o'},
        {id: 4, title: 'r', body: 'g'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        console.log('sort posts')
        if (filter.sort) {
            return [...posts].sort((a,b ) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className={'App'}>
        <div>
            <PostForm create={createPost}/>
            <br style={{margin: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
        </div>
        {
            sortedAndSearchedPosts.length !== 0
            ? <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
            : <h1 style={{textAlign: 'center'}}>Posts weren't found</h1>

        }

    </div>
  );
}

export default App;
