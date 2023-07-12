import {v1} from "uuid";
import avatar from "../../src/components/avatar_sidebar.png";


let renderTree = () => {
    console.log("State was changed");
};


export const state = {
    profileData: {
        postsData: [
            {
                postId: v1(),
                postLikesCount: 40,
                postText: "Hello"
            },
            {
                postId: v1(),
                postLikesCount: 68,
                postText: "I'm Learning React"
            },
            {
                postId: v1(),
                postLikesCount: 113,
                postText: "My goal is to be React Developer"
            },
            {
                postId: v1(),
                postLikesCount: 104,
                postText: "I love u!"
            },
        ],
        newPostText: ""
    },
    dialogsData: {
        dialogsUsers: [
            {
                userId: v1(),
                userName: "Denis"
            },
            {
                userId: v1(),
                userName: "Alex"
            },
            {
                userId: v1(),
                userName: "Michael"
            },
            {
                userId: v1(),
                userName: "Ludovic"
            },
            {
                userId: v1(),
                userName: "Cinderella"
            }
        ],
        dialogsMessages: [
            {
                messageId: v1(),
                messageText: "Hello"
            },
            {
                messageId: v1(),
                messageText: "How are u?"
            },
            {
                messageId: v1(),
                messageText: "I love y'all"
            },
            {
                messageId: v1(),
                messageText: "Hello"
            },
            {
                messageId: v1(),
                messageText: "Let's fun"
            },
        ],
        newMessageText: ""
    },
    sidebarData: {
        friendsListData: [
            {
                id: v1(),
                avatar: avatar,
                name: "Oleg"
            },
            {
                id: v1(),
                avatar: avatar,
                name: "Mike"
            },
            {
                id: v1(),
                avatar: avatar,
                name: "Stas"
            },
        ]
    }
};
export const addPost = () => {
    const newPost = {
        postId: v1(),
        postLikesCount: 0,
        postText: state.profileData.newPostText
    };
    state.profileData.postsData.push(newPost)
    state.profileData.newPostText = "";
    renderTree();
};

export const updateNewPostText = (value: string) => {
    state.profileData.newPostText = value;
    renderTree();
};


export const addMessage = () => {
    const newMessage = {
        messageId: v1(),
        messageText: state.dialogsData.newMessageText
    };
    state.dialogsData.dialogsMessages.push(newMessage);
    state.dialogsData.newMessageText = "";
    renderTree();
};


export const updateNewMessageText = (value: string) => {
    state.dialogsData.newMessageText = value;
    renderTree();
};

export const subscribe = (observer: () => void) => {
    renderTree = observer
}