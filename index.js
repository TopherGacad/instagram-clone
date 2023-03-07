const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section-content")
const uploadEl = document.getElementById("upload-el")
// const postBtn = document.getElementById("post-btn")
// const userEl = document.getElementById("user-el")
// const userLoc = document.getElementById("user-loc")

function pushPost(){
    posts.push({
        name: "Christopher Gacad",
        username: "Tophergacad",
        location: "Makati, Philippines",
        avatar: "images/Corporate_2x2.png",
        post: "images/tops.jpg",
        comment: "this is me, making instagram clone for solo project in scrimba 😁 ",
        likes: 2023
    })
}
pushPost()

function renderImgs(){
    for(let i = 0; i < posts.length; i++){
        let renderPost = posts[i]

        sectionEl.innerHTML += `
        <div class="section-head">
            <img class="icon" src="${posts[i].avatar}" >
            <div class="section-head-details">
                <h5 id="username">${posts[i].name}</h5>
                <p id="user-add">${posts[i].location}</p>
            </div>
        </div>

        <img class="post" src=${posts[i].post} >
        <div class="btn-container">
            <img class="btn" id="btn-heart" src="images/icon-heart.png">
            <img class="btn" src="images/icon-comment.png">
            <img class="btn" src="images/icon-dm.png">
        </div>
        <div class="section-details">
            <h5 id="like-count">${posts[i].likes} likes</h5>
            <div class="comment-container">
                <h5>${posts[i].username}</h5>
                <p class="comment">${posts[i].comment}</p>
            </div>
        </div>
        `
    } 
}
renderImgs()


            //FOR DEVELOPMENT PURPOSES

// postBtn.addEventListener("click", function(){
//     posts.push({
//         name: userEl.value,
//         username: userEl.value,
//         location: userLoc.value,
//         avatar: "images/Corporate_2x2.png",
//         post: uploadEl.value,
//         comment: "just took a few mushrooms lol",
//         likes: 1000
//     })
// })