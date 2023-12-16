import {Schema, model} from "mongoose";

const SampleSchema: Schema = new Schema ({
    factory: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});
const Sample = model("Sample", SampleSchema);
export default Sample;