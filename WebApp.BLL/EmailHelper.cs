using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace WebApp.BLL
{
   public class EmailHelper
    {
        public void EmailNewAccount(string username, string password)
        {
            var fromAddress = new MailAddress("emailsenderforms@gmail.com");
            var fromPassword = "iclartIsGood1";
            var toAddress = new MailAddress(username);

            string subject = "Account Credentials";
            string body = "<p>Account Username: " + username + "</p><p>Account Password: " + password + "</p>";

            System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false

            };
            smtp.Credentials = new NetworkCredential(fromAddress.Address, fromPassword);
            smtp.EnableSsl = true;
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
            {
                smtp.Send(message);
            }
                
        }
    }
}
