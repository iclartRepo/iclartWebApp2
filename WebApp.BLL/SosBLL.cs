using Nelibur.ObjectMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Common.Entities;
using WebApp.Common.Models;
using WebApp.DAL;

namespace WebApp.BLL
{
    public class SosBLL
    {
        private GenericRepository<SOSEntity> _repository;
        private GenericRepository<ProductEntity> _productRepository;
        private GenericRepository<ClientEntity> _clientRepository;
        private DBContext context;

        public SosBLL()
        {
            context = new DBContext();
            _repository = new GenericRepository<SOSEntity>(context);
            _productRepository = new GenericRepository<ProductEntity>(context);
            _clientRepository = new GenericRepository<ClientEntity>(context);
        }

        public void AddSos(SOSFormModel model)
        {
            TinyMapper.Bind<SOSModel, SOSEntity>();
            var sosEntity = TinyMapper.Map<SOSEntity>(model.Sos);
            sosEntity.CreatedDate = DateTime.Now;
            sosEntity.Orders = new List<SOSProductEntity>();
            sosEntity.CustomOrders = new List<SOSCustomEntity>();

            double total_amount = 0;

            TinyMapper.Bind<SOSProductModel, SOSProductEntity>();
            if (model.StandardOrders != null)
            {
                for (int i=0; i<model.StandardOrders.Count; i++)
                {
                    var order = model.StandardOrders[i];
                    var orderEntity = TinyMapper.Map<SOSProductEntity>(order);
                    order.QuantityDelivered = 0;
                    order.Discarded = false;

                    total_amount += (orderEntity.Price * orderEntity.Quantity);

                    var product = _productRepository.Get(y => y.Id == orderEntity.ProductId).FirstOrDefault();
                    if (product == null)
                    {
                        throw new Exception("Product not found.");
                    }
                    else
                    {
                        orderEntity.Product = product;
                    }
                    orderEntity.SalesOrderSlip = sosEntity;
                    sosEntity.Orders.Add(orderEntity);
                }
            }

            TinyMapper.Bind<SOSCustomModel, SOSCustomEntity>();
            if (model.CustomOrders != null)
            {
                for (int j=0; j<model.CustomOrders.Count; j++)
                {
                    var order = model.CustomOrders[j];
                    var orderEntity = TinyMapper.Map<SOSCustomEntity>(order);
                    orderEntity.QuantityDelivered = 0;
                    orderEntity.Discarded = false;

                    total_amount += (orderEntity.Price * orderEntity.Quantity);

                    orderEntity.SalesOrderSlip = sosEntity;
                    sosEntity.CustomOrders.Add(orderEntity);
                }
            }
            sosEntity.TotalAmount = total_amount;
            sosEntity.Exported = false;

            var client = _clientRepository.Get(t => t.Id == sosEntity.ClientId).FirstOrDefault();
            if (client == null)
            {
                throw new Exception("Client not found.");
            }
            else
            {
                sosEntity.Client = client;
            }         
            sosEntity.Status = false;
            
            _repository.Insert(sosEntity);
        }
    }
}
