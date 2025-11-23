import { Schema, model, models } from "mongoose";

const packageSchema = new Schema( {
    name: { type: String, required: true },
    type: { type: String, required: true },
    maxCustomer: { type: Number, required: true },
    maxProduct: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
} );

export const Package = models.Package || model("Package", packageSchema);

export default Package;