using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Common.Entities;
using WebApp.DAL;

namespace WebApp.BLL
{
    public class SosBLL
    {
        private GenericRepository<SOSEntity> _repository;
        private DBContext context;

        public SosBLL()
        {
            context = new DBContext();
            _repository = new GenericRepository<SOSEntity>(context);
        }
    }
}
