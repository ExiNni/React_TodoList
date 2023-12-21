import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import { Pagination  } from "@mui/material";
import Stack from '@mui/material/Stack';







function Board(){

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];


    const [posts, setPosts] = useState(savedPosts);

    const [newPost, setNewPost] = useState('');

    

    useEffect(() =>{
        localStorage.setItem('posts',JSON.stringify(posts));
    }, [posts]);



    const addPost = () => {
        setPosts([...posts, newPost]);
        setNewPost('');

    }

    //게시글 삭제 함수
    const deletePost = (index) => {
        const removePost = [...posts];
        removePost.splice(index, 1);
        setPosts(removePost);
        localStorage.setItem('posts', JSON.stringify(removePost))
    };

    
    
   


    return (
        <div>
            
            <h1>게시판</h1>
            <div className="board">
            <div>
            <textarea
                placeholder="게시글을 입력하세요."
                
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            >
                
                </textarea>
                <br/>
                <Button variant="contained" onClick={addPost}>게시글 추가</Button>
                </div>
                </div>
                    <div>
                        <h2>게시글 목록</h2>
                        <ul>
                            {posts.map((post,Index) => (
                                <li
                                key={Index}>
                                    {post}
                                <Button variant="contained" onClick={() => deletePost(Index)}>삭제하기</Button>
                                </li>
                            ))}
                        </ul>
                        <Pagination count={3} color="primary" />
                        
                    </div>
                </div>
        )

};



export default Board;