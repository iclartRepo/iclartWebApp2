using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebApp.Common.Entities;
using WebApp.Common.Models;
using WebApp.DAL;

namespace WebApp.Controllers
{
    public class ClientController : Controller
    {
        [HttpGet]
        public ActionResult GetClientList()
        {

            var clientRepository = new GenericRepository<ClientEntity>();

            var clients = clientRepository.Get();

            var clientsModel = new List<ClientModel>();
            clientsModel.AddRange(clients.Select(x => new ClientModel
            {
                Name = x.Name,
                TIN = x.TIN,
                Office_Address = x.Office_Address,
                Warehouse_Address = x.Warehouse_Address,
                Credit_Limit = x.Credit_Limit,
                Dealer = x.Dealer,
                Accounts_Receivables = x.Accounts_Receivables,
                Credit_Terms = x.Credit_Terms,
                Discount_Scheme = x.Discount_Scheme,
                Agent = x.Agent,
                Contacts_Accounting = x.Contacts_Accounting,
                Contacts_Order = x.Contacts_Order,
                Telephone_Number = x.Telephone_Number,
                Fax_Number = x.Fax_Number,
                Email = x.Email,
                Rounded_Payment = x.Rounded_Payment,
                Usual_Ordered_Item = x.Usual_Ordered_Item,
                Witholding_Tax = x.Witholding_Tax,
                Vat_Exemption = x.Vat_Exemption,
                Collection_Period = x.Collection_Period,
                Combine_Items = x.Combine_Items,
                Overpayment_Counter = x.Overpayment_Counter,
                Created_Date = x.Created_Date,
                Modified_Date = x.Modified_Date
            }));

            return Json(clientsModel, JsonRequestBehavior.AllowGet);
        }
    }
}