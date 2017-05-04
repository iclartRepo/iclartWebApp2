using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApp.Common.Entities
{
    public class SOSCustomEntity
    {
        public int Id { get; set; }
        public int SOSId { get; set; }
        public string ItemDescription { get; set; }
        public int Quantity { get; set; }
        public string Unit { get; set; }
        public double Price { get; set; }
        public int QuantityDelivered { get; set; }
        public bool Discarded { get; set; }
        [ForeignKey("SOSId")]
        public SOSEntity SalesOrderSlip { get; set; }


    }
}
