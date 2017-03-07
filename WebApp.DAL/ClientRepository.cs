using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Common.Entities;

namespace WebApp.DAL
{
    public class ClientRepository
    {
        public List<ClientEntity> GetAllClients()
        {
            using (var context = new DBContext())
            {
                var clients = context.Clients.ToList();
                return clients;
            }
        }
    }
}
