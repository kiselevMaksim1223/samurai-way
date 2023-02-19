import {
    addNewPost,
    changeNewPostText,
    profileInfoType,
    profilePageReducer,
    profilePageType, setProfileInfo
} from "./profilePage-reducer";


let initialState:profilePageType

beforeEach(() =>{
    return initialState = {
        postData: [
            {id: 1, postContent: "My first post"},
            {id: 2, postContent: "HelloFW"},
            {id: 3, postContent: "Do you know Lil Peep?"},
            {id: 4, postContent: "Anna"},
            {id: 5, postContent: "Igor"},
        ],
        newPostText: "SAMURAIS1234",
        profileInfo: {} as profileInfoType
    }
})


test("new post should be added", () => {

    const newState = profilePageReducer(initialState, addNewPost())

    expect(newState.postData.length).toBe(6)
    expect(newState.postData[newState.postData.length-1].postContent).toBe("SAMURAIS1234")
})

test("post text should be changed", () => {


    const newText = "new samurai"
    const newState = profilePageReducer(initialState, changeNewPostText(newText))

    expect(newState.newPostText).toBe(newText)
    expect(newState.postData.length).toBe(5)
})

test("profile info should be seen", () => {

    const newProfile:profileInfoType = {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }

    const newState = profilePageReducer(initialState, setProfileInfo(newProfile))

    expect(newState.profileInfo).toBe(newProfile)
})