const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://amazingarchitecture.com/storage/files/1/architecture-firms/amin-moazzen/black-fly/black_house_amin_moazzen_bangal_india-3.jpg",
    set: (v) =>
      v === ""
        ? "https://amazingarchitecture.com/storage/files/1/architecture-firms/amin-moazzen/black-fly/black_house_amin_moazzen_bangal_india-3.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
