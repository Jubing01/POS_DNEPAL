import { Schema, model, models} from 'mongoose';

const subscriptionSchema = new Schema(
  {
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    packageId: { type: Schema.Types.ObjectId, ref: 'Package', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Subscription = models.Subscription || model('Subscription', subscriptionSchema);

export default Subscription;