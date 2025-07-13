import prompt from "prompt";
import handle from "./handle.js";
import promptSchemaQRCode from "../../prompts-schemas/prompt-qrcode.js";

async function createQRCode() {
       prompt.get(promptSchemaQRCode, handle)
}

export default createQRCode