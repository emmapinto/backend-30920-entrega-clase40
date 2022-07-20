const accountSid = "ACfc782fa114f1f762664e44971fe9a2fa";
const authToken = "59b17307e59b6ce2226d6d73a71ef0c8";

import twilio from "twilio";

const client = twilio(accountSid, authToken);

export const enviarSMS = async (mensaje, numero) => {
	try {
		let rta = await client.messages.create({
			body: mensaje,
			from: "+14782804903",
			to: numero,
		});
		return rta;
	} catch (error) {
		return error;
	}
};
