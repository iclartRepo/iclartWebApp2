using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Common.Entities;
using WebApp.DAL;

namespace WebApp.BLL
{
    public class ProductBLL
    {
        private GenericRepository<ProductEntity> _repository;

        public ProductBLL()
        {
            _repository = new GenericRepository<ProductEntity>();
        }
    }
}
