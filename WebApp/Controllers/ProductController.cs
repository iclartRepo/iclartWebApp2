using Nelibur.ObjectMapper;
using System;
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
    public class ProductController : Controller
    {
        #region GET METHODS
        [HttpGet]
        public ActionResult GetProductCategories()
        {
            try
            {
                using (var context = new DBContext())
                {
                    var repository = new GenericRepository<ProductCategoryEntity>(context);

                    var categories = repository.Get(i => i.IsDeleted == false).ToList();

                    TinyMapper.Bind<List<ProductCategoryEntity>, List<ProductCategoryModel>>();

                    var categoriesModel = TinyMapper.Map<List<ProductCategoryModel>>(categories);

                    var message = new MessageResult<ProductCategoryModel>
                    {
                        isError = false,
                        ResultList = categoriesModel,
                        Message = "Success",
                        Result = null
                    };
                    return Json(message, JsonRequestBehavior.AllowGet);
                }
            }
            catch(Exception ex)
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
        public ActionResult AddProductCategory(string name)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.AddProductCategory(name);
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "Product Category added successfully!",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = ex.Message,
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion
        #region DELETE METHODS
        [HttpDelete]
        public ActionResult DeleteProductCategory(int id)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.DeleteProductCategory(id);
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = false,
                    ResultList = null,
                    Message ="Success",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = ex.Message,
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}