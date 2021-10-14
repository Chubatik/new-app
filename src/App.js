import React, {useState, useMemo} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'a', body: 'f'},
        {id: 2, title: 'm', body: 'a'},
        {id: 3, title: 'b', body: 'o'},
        {id: 4, title: 'r', body: 'g'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts]
                .sort((a,b ) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts
            .filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className={'App'}>
        <MyButton style={{marginTop: '30px'}}
                  onClick={() => setModal(true)}>
            Create post
        </MyButton>

        <MyModal visible={modal}
                 setVisible={setModal}>
            <PostForm create={createPost}/>

        </MyModal>

        <br style={{margin: '15px'}}/>

        <PostFilter filter={filter}
                    setFilter={setFilter}/>

        <PostList posts={sortedAndSearchedPosts}
                  remove={removePost}/>
    </div>
  );
}

export default App;
