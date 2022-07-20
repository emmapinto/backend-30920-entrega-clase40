import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "marcelle.muller29@ethereal.email",
		pass: "XQ16TAZFKznAJTkpYK",
	},
});

export const enviarMail = (asunto, mensaje, cb) => {
	const mailOptions = {
		from: "Servidor Node.js",
		to: "marcelle.muller29@ethereal.email",
		subject: asunto,
		html: mensaje,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		/*
        if(err) {
            console.log(err)
            //return err
        }
        else console.log(info)
        */
		cb(err, info);
	});
};
