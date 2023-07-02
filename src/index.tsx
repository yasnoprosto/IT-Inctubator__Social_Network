import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Profile/MyPosts/Post";
import {v1} from "uuid";
import {DialogType} from "./components/Dialogs/Dialog/DialogUsers";
import {DialogMessagesType} from "./components/Dialogs/Dialog/DialogMessages";

const postsData: PostType[] = [
    {postId: v1(), postLikesCount: 40, postText: "Hello"},
    {postId: v1(), postLikesCount: 68, postText: "I'm Learning React"},
    {postId: v1(), postLikesCount: 113, postText: "My goal is to be React Developer"},
    {postId: v1(), postLikesCount: 104, postText: "I love u!"},
];

const dialogsUsers: DialogType[] =  [
    { userId: v1(), userName: "Denis" },
    { userId: v1(), userName: "Alex" },
    { userId: v1(), userName: "Michael" },
    { userId: v1(), userName: "Ludovic" },
    { userId: v1(), userName: "Cinderella" }
];

const dialogsMessages: DialogMessagesType[] = [
    {messageId: v1(), messageText: "Hello"},
    {messageId: v1(), messageText: "How are u?" },
    {messageId: v1(), messageText: "I love y'all"},
    {messageId: v1(), messageText: "Hello"},
    {messageId: v1(), messageText: "Let's fun"},
]

ReactDOM.render(
    <App postsData={postsData} dialogsUsers={dialogsUsers} dialogsMessages={dialogsMessages}/>,
  document.getElementById('root')
);