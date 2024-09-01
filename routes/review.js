const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewRouter = require("../controllers/reviews.js");

//review

router.post("/",
isLoggedIn,
validateReview, wrapAsync(reviewRouter.createReview)
   );
   
   // review delete rougte
   
   router.delete("/:reviewId", 
   isLoggedIn,
   isReviewAuthor,
   wrapAsync(reviewRouter.destroyReview)
    );

    module.exports = router;