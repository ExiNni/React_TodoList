import React, {useEffect, useState} from "react";

function Board(){
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [posts, setPosts] = useState(savedPosts);
    const [newPost, setNewPost] = useState('');
    useEffect(() =>{
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = () => {
    if (newPost.trim() !== '') {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        setNewPost('');

        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
};


    const deletePost = (index) => {
        const removePost = [...posts];
        removePost.splice(index, 1); 
        setPosts(removePost);
        localStorage.setItem('posts', JSON.stringify(removePost));
    };

    return (
        <div>
            <h1>게시판</h1>
            <div>
                <textarea
                    placeholder="게시글을 입력하세요."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                >
                </textarea>
                <br/>
                <button onClick={addPost}>게시글 추가</button>
            </div>
            <div>
                <h2>게시글 목록</h2>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            {post}
                            <button onClick={() => deletePost(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default Board;