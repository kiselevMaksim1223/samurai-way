import {
    followFriends,
    setCurrentPage, setIsLoading, setTotalUsersCount,
    unfollowFriends,
    userPageReducer,
    usersPageType
} from "./user-page-reducer";

let initialState:usersPageType

beforeEach(() => {
    return initialState = {
        items: [
            {
                "name": "dmitry_rytchkov",
                "id": 27937,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "testeruser",
                "id": 27936,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "boriswork",
                "id": 27935,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": true
            },
        ],
        usersOnPage:5,
        totalCount:50,
        currentPage:2,
        isLoading:false
    }
})

test("user should be followed", () => {

    const action = followFriends(true, 27937)
    const newState = userPageReducer(initialState, action)

    expect(newState.items[0].followed).toBe(true)
})

test("user should be unfollowed", () => {

    const action = unfollowFriends(false, 27935)
    const newState = userPageReducer(initialState, action)

    expect(newState.items[2].followed).toBe(false)
    expect(newState.items[0].followed).toBe(false)
})

test("current page should be changed", () => {

    const action = setCurrentPage(5)
    const newState = userPageReducer(initialState, action)

    expect(newState.currentPage).toBe(5)
})

test("total users count should be gotten", () => {

    const action = setTotalUsersCount(1000)
    const newState = userPageReducer(initialState, action)

    expect(newState.totalCount).toBe(1000)
})

test("isLoading should be changed to true", () => {

    const action = setIsLoading(true)
    const newState = userPageReducer(initialState, action)

    expect(newState.isLoading).toBe(true)
})

