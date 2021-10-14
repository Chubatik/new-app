import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'a', body: 'f'},
        {id: 2, title: 'm', body: 'a'},
        {id: 3, title: 'b', body: 'o'},
        {id: 4, title: 'r', body: 'g'},
    ])

    const [selectedSort, setSelectedSort] = useState('');

    // const [searchQuery, setSearchQuery] = useState('');


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b ) => a[sort].localeCompare(b[sort])));
    }

  return (
    <div className={'App'}>
        <div>
            <PostForm create={createPost}/>

            <br style={{margin: '15px'}}/>

            <MySelect defaultValue={'Sort by'}
                      value={selectedSort}
                      options={[
                          {value: 'title', name: 'title'},
                          {value: 'body', name: 'body'}
                      ]}
                      onChange={sortPosts}/>
        </div>
        {
            posts.length !== 0
            ? <PostList posts={posts} remove={removePost}/>
            : <h1 style={{textAlign: 'center'}}>Posts weren't found</h1>

        }

    </div>
  );
}

export default App;
