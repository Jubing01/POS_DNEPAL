import { Schema, model, models } from "mongoose";

const forgotPassSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const ForgotPass = models.ForgotPass || model("ForgotPass", forgotPassSchema);

export default ForgotPass;
