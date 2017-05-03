using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApp.Common.Entities
{
    public class SOSProductEntity
    {
        public int Id { get; set; }
        public int SOSId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public int QuantityDelivered { get; set; }
        [ForeignKey("SOSId")]
        public SOSEntity SalesOrderSlip { get; set; }
        [ForeignKey("ProductId")]
        public ProductEntity Product { get; set; }

    }
}
