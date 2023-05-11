"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Likes", {
            likeId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            UserId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "userId",
                },
                onDelete: "CASCADE",
            },
            PostId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Posts",
                    key: "postId",
                },
                onDelete: "CASCADE",
            },
            CommentId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: "Comments",
                    key: "commentId",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Likes");
    },
};
