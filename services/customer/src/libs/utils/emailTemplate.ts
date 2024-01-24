

 const emailTemplate=(Link: string)=>{
    return(`
   

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 20px; text-align: center; background-color: #333333;">
        <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Welcome to Our Platform</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p style="font-size: 18px; line-height: 24px; color: #333333;">Hello there,</p>
        <p style="font-size: 16px; line-height: 22px; color: #333333;">Please verify your email address to start using our platform. Just click the button below:</p>
        <p style="text-align: center; margin: 20px 0;">
          <a href="${Link}" style="display: inline-block; padding: 12px 24px; background-color: #333333; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">Verify Email</a>
        </p>
        <p style="font-size: 16px; line-height: 22px; color: #333333;">If you didn't request this verification, you can safely ignore this email.</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; background-color: #333333; text-align: center;">
        <p style="color: #ffffff; margin: 0;">Questions? Contact us at support@example.com</p>
      </td>
    </tr>
  </table>`)


}


export default emailTemplate