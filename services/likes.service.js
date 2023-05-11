const { Likes, Posts, Comments } = require("../models");
const LikesRepository = require("../repositories/likes.repository");

class LikeService {
    likesRepository = new LikesRepository(Likes);



}

//user
