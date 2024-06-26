import mongoose from "mongoose";

const { Schema } = mongoose;
const OrderDetail = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    serviceName: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: false,
    },
    serviceType: {
      type: String,
      default: null,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    handling: {
      type: String,
      required: false,
    },
    roomType: {
      type: String,
      default: null,
    },
    distanceFromGround: {
      type: String,
      default: null,
    },
    floorType: {
      type: String,
      default: null,
    },
    sTiles: {
      type: String,
      required: false
    },
    sticking: {
      type: String,
      required: false
    },
    measureType: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    currectMeasurement: {
      type: Boolean,
      default: false,
    },
    images: [
      {
        type: String,
        default: null,
      },
    ],
    temperedGlassType: {
      type: String,
      default: null,
    },
    glassType: {
      type: String,
      default: null,
    },
    borePrep: {
      type: String,
      required: false
    },
    bevel: {
      type: String,
      required: false
    },
    interiorHardware: {
      type: String,
      required: false
    },
    preHanging: {
      type: String,
      required: false
    },
    wallCondition: {
      type: String,
      required: false
    },
    carpetCut: {
      type: String,
      required: false
    },
    stopType: {
      type: String,
      required: false
    },
    bullNose: {
      type: String,
      required: false
    },
    astragal: {
      type: String,
      required: false
    },
    flushBolts: {
      type: String,
      required: false
    },
    designType: {
      type: String,
      default: null,
    },
    colorSelection: {
      type: String,
      default: null,
    },
    styleSelection: {
      type: String,
      default: null,
    },
    openingType: {
      type: String,
      default: null,
    },
    openingDirection: {
      type: String,
      default: null,
    },
    totalAmount: {
      type: Number,
      default: null,
    },
    statusBit: {
      type: Boolean,
      default: true,
    },
    delBit: {
      type: Boolean,
      default: false,
    },
    modelName: {
        type: String,
        default: null,
    },
    jambWidthInches :{
        type: String,
        default: null
    },
    unit: {
        type: String,
        default: null,
    },
    overallFrameWidth: {
        type: String,
        default: null
    },
    overallFrameHeight: {
        type: String,
        default: null
    },
    coreType: {
        type: String,
        default: null
    },
    doorThicknessInches: {
        type: String,
        default: null
    },
    hinges: {
        type: String,
        default: null
    },
    hingeType: {
      type: String,
      required: false
    },
    hingeFinish: {
      type: String,
      required: false
    },
    ballBearingHinges: {
      type: String,
      required: false
    },
    hingeType: {
      type: String,
      required: false
    },
    isFireRated: {
        type: Boolean,
        default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("OrderDetail", OrderDetail);
