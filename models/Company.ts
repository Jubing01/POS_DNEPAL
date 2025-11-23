import { Schema, model, models } from "mongoose";

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    pan: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Company = models.Company || model("Company", companySchema);

export default Company;
