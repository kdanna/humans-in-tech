const Post = (url) => {
    return fetch(url, {
        method: "GET", // For some reason you have to post form data via GET method
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export default Post