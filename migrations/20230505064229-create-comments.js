"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Comments", {
            commentId: {
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
            parentCommentId: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: "Comments",
                    key: "commentId",
                },
                onDelete: "CASCADE",
            },
            comment: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            nickname: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            likes: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Comments");
    },
};
