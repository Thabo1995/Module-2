function randomFunc(categories) {
    for (let i = 0; i < 2; i++) {
        const random = categories[Math.floor(Math.random() * categories.length)];
        return random
    }
}

var categories = ["Best Consumer Solution", 
"Best Enterprise Solution", 
"Best African Solution", "Most Innovative Solution", "Best Gaming Solution", "Best Health Solution","Best Agricultural Solution",
"Best Educational Solution", "Best Financial Solution","Best Hackathon Solution","Best South African Solution","Best Campus Cup Solution",
 "Huawei AppGalleryategory 15"]

console.log(randomFunc(categories));