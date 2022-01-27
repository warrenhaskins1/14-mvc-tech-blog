const router = require('express').Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");

router.use("/user", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
