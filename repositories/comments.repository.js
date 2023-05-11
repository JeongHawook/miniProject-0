const { Op } = require("sequelize");

class CommentsRepository {
    constructor(commentsModel) {
        this.commentsModel = commentsModel;
    }

    allComments = async (_postId) => {
        return await this.commentsModel.findAll({
            where: { PostId: _postId },
            include: [{ model: this.commentsModel, as: "ChildComments" }],
        });
    };

    oneComment = async (_commentId, _postId) => {
        return await this.commentsModel.findOne({
            where: {
                [Op.and]: [{ commentId: _commentId }, { postId: _postId }],
            },
        });
    };

    createComment = async (comment, _postId, nickname, userId) => {
        return await this.commentsModel.create({
            comment,
            nickname: nickname,
            PostId: _postId,
            UserId: userId,
        });
    };

    createChildComment = async (
        comment,
        _commentId,
        nickname,
        userId,
        _postId
    ) => {
        return await this.commentsModel.create({
            comment,
            nickname: nickname,
            parentCommentId: _commentId,
            UserId: userId,
            PostId: _postId,
        });
    };

    updateComment = async (comment, _postId, _commentId, nickname) => {
        return await this.commentsModel.update(
            { comment },
            {
                where: {
                    [Op.and]: [
                        { commentId: _commentId },
                        { nickname },
                        { postId: _postId },
                    ],
                },
            }
        );
    };
    deleteComment = async (nickname, _commentId, _postId) => {
        return await this.commentsModel.destroy({
            where: {
                [Op.and]: [
                    { commentId: _commentId },
                    { nickname },
                    { postId: _postId },
                ],
            },
        });
    };
}
module.exports = CommentsRepository;
