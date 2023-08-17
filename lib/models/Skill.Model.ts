import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default Skill;
