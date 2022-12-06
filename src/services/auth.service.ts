import * as ejsLibrary from "../libraries/ejs.library";
import { mailer } from "../libraries/mailer.library";

export async function sendCodeFollowing(params: { data: object | undefined; mail: string | undefined }) {
  const { data, mail } = params;
  const htmlContent = await ejsLibrary.renderFileHtml({ data:data || {}, file: "codigo-template.ejs"});
  const responseMailer = await mailer.sendMail({
    from: process.env.MAILER_USER,
    to: mail,
    html: htmlContent,
    subject:"Codigo seguimiento"
  });
}
