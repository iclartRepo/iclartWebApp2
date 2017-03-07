
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Common.Entities;

namespace WebApp.DAL
{
    public class DBContext : DbContext
    {
        public DBContext() : base("DefaultConnection")
        {
            Database.SetInitializer(new IclartDBInitializer());
        }
        public DbSet<ClientEntity> Clients { get; set; }
    }
    public class IclartDBInitializer : CreateDatabaseIfNotExists<DBContext>
    {
        protected override void Seed(DBContext context)
        {
            base.Seed(context);
        }
    }
}
