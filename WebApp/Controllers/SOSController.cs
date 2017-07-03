﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApp.BLL;
using WebApp.Common.Entities;
using WebApp.Common.Models;
using WebApp.DAL;

namespace WebApp.Controllers
{
    public class SOSController : Controller
    {
        #region GET METHODS 
        [HttpGet]
        public ActionResult GetSOSList()
        {
            try
            {
                using (var context = new DBContext())
                {
                    var sosRepository = new GenericRepository<SOSEntity>(context);

                    var testList = context.SalesOrderSlips.ToList();
                    var sosList = sosRepository.Get().OrderBy(i => i.Status).ThenByDescending(i => i.Sos_Date).Select(i => new SOSModel { Id = i.Id, Status = i.Status, Client = new ClientModel { Name = i.ClientEntity.Name }, Sos_Date = i.Sos_Date, TotalAmount = i.TotalAmount }).ToList();

                    var message = new MessageResult<SOSModel>
                    {
                        isError = false,
                        ResultList = sosList,
                        Message = "Success",
                        Result = null
                    };
                    return Json(message, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                var message = new MessageResult<ClientModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = "Some error occured. Please contact the administrator.",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region POST METHODS
        [HttpPost]
        public ActionResult AddSOS(SOSFormModel model)
        {
            try
            {
                var sosBLL = new SosBLL();
                sosBLL.AddSos(model);

                var message = new MessageResult<SOSFormModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "SOS Added Succesfully!",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                var message = new MessageResult<SOSFormModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = "Some error occured. Please contact the administrator.",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}