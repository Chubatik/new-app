import React, {useState, useEffect} from 'react';
import './styles/App.css';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";
const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, postError, isPostsLoading] = useFetching(async () => {
        const response = await PostService.getAll(pagination.limit, pagination.page);
        setPosts(response.data);
        setTotalPages(getPageCount(response.headers['x-total-count'], pagination.limit));
    });
    const [totalPages, setTotalPages] = useState(0);
    const [pagination, setPagination] = useState({limit: 10, page: 1});

    useEffect(() => {
        fetchPosts();
    },[pagination.page]);



    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPagination({...pagination, page: page});
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

            <PostFilter filter={filter} setFilter={setFilter}/>

            {postError && <h1>Error {postError}</h1>}

            {isPostsLoading ? <h1>Loading...</h1> : <PostList posts={sortedAndSearchedPosts} remove={removePost}/>}

            <MyPagination changePage={changePage} totalPages={totalPages}/>
        </div>

    );
}

export default Posts;

