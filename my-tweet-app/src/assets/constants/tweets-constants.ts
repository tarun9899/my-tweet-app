
export class TweetsConstants{

    public static readonly tweetsUrls = Object.freeze({
        tweetsBaseUrl : 'https://sh41w1iz0l.execute-api.ap-south-1.amazonaws.com/Prod',
    })


    
    public static readonly tweetsusersUrls = Object.freeze({
        users : '/users',
        login:'/login',
        register : '/register',
        allUser : '/users/all',
        userSearch : '/users/search',
        userForgot: '/forgot'
    })

    public static readonly tweetUrls = Object.freeze({
        tweets:'/tweets',
        allAweets:'/tweets/all',
        addTweet:'/add',
        allTweetByName:'/all',
        deleteTweet:'/delete',
        likeALL:'/likes/all',
        like:'/like',
        reply:'/reply',
        updateTweet:'/update'

    })

}