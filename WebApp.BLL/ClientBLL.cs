using AutoMapper;
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
    public class ClientBLL
    {
        private GenericRepository<ClientEntity> _repository;

        public ClientBLL()
        {
            _repository = new GenericRepository<ClientEntity>();
        }

        public void AddClient(ClientModel client)
        {
            if (ValidateIfExists(client))
            {
                TinyMapper.Bind<ClientModel, ClientEntity>();
                var clientEntity = TinyMapper.Map<ClientEntity>(client);
                clientEntity.Created_Date = DateTime.Now;
                _repository.Insert(clientEntity);
            }
            else
            {
                throw new Exception("Client already exists.");
            }
        }
        public void UpdateClient(ClientModel client)
        {
            if (ValidateIfExists(client))
            {
                Mapper.Initialize(cfg => cfg.CreateMap<ClientModel, ClientEntity>().ForMember(x=> x.Created_Date, opt => opt.Ignore()));
                var clientEntity = _repository.Get(i => i.Id == client.Id).First();
                Mapper.Map(client, clientEntity);
                clientEntity.Modified_Date = DateTime.Now;
                _repository.Update(clientEntity);
            }
            else
            {
                throw new Exception("Client already exists.");
            }
        }
        public bool ValidateIfExists(ClientModel client)
        {
            var clients = _repository.Get();
            var clientCheck = (from c in clients
                               where c.Name.Trim(' ').ToLower() == client.Name.Trim(' ').ToLower()
                               select c).ToList();
            if (clientCheck.Count == 0 || client.Name == clientCheck[0].Name)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
