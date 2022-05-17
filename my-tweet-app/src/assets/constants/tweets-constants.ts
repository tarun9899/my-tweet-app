
export class TweetsConstants{

    public static readonly tweetsUrls = Object.freeze({
        tweetsBaseUrl : 'https://r0bv8uu3j6.execute-api.us-east-1.amazonaws.com/Prod-Env',
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
        likeALL:'/like/all',
        like:'/like',
        reply:'/reply',
        updateTweet:'/update'

    })

}