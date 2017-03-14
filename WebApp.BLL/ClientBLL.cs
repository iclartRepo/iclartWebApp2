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
        /// <summary>
        /// Adding new Client into Database
        /// </summary>
        /// <param name="client"></param>
        public void AddClient(ClientModel client)
        {
            var exists = ValidateIfExists(client);
            var complete = ValidateCompleteFields(client);
            if (exists && complete)
            {
                TinyMapper.Bind<ClientModel, ClientEntity>();
                var clientEntity = TinyMapper.Map<ClientEntity>(client);
                clientEntity.Created_Date = DateTime.Now;
                _repository.Insert(clientEntity);
            }
            else if (complete == false)
            {
                throw new Exception("Please fill out required fields.");
            }
            else
            {
                throw new Exception("Client already exists.");
            }
        }
        /// <summary>
        /// Updating Client Info
        /// </summary>
        /// <param name="client"></param>
        public void UpdateClient(ClientModel client)
        {
            var exists = ValidateIfExists(client);
            var complete = ValidateCompleteFields(client);
            if (exists && complete)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<ClientModel, ClientEntity>().ForMember(x=> x.Created_Date, opt => opt.Ignore()));
                var clientEntity = _repository.Get(i => i.Id == client.Id).First();
                Mapper.Map(client, clientEntity);
                clientEntity.Modified_Date = DateTime.Now;
                _repository.Update(clientEntity);
            }
            else if (complete == false)
            {
                throw new Exception("Please fill out required fields.");
            }
            else
            {
                throw new Exception("Client already exists.");
            }
        }
        /// <summary>
        /// Add Validation Function for incomplete fields
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        public bool ValidateCompleteFields(ClientModel client)
        {
            var complete = true;
            if (client.Name == "" || client.Name == null)
            {
                complete = false;
            }
            if (client.Telephone_Number == "" || client.Telephone_Number == null)
            {
                complete = false;
            }
            if (client.Contacts_Order == "" || client.Contacts_Order == null)
            {
                complete = false;
            }
            return complete;
        }
        /// <summary>
        /// Add Validation function for checking if client exists already
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
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
