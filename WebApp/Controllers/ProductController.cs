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

                    var categories = repository.Get(i => i.IsDeleted == false).OrderBy(i => i.Name).ToList();

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

        [HttpGet]
        public ActionResult GetProducts()
        {
            try
            {
                using (var context = new DBContext())
                {
                    var productRepository = new GenericRepository<ProductEntity>(context);

                    var productEntities = productRepository.Get(i => i.IsDeleted == false).OrderBy(i => i.ProductCategory.Name).ThenBy(i => i.Name).ToList();

                    TinyMapper.Bind<List<ProductEntity>, List<ProductModel>>();
                    var productsModel = TinyMapper.Map<List<ProductModel>>(productEntities);

                    var message = new MessageResult<ProductModel>
                    {
                        isError = false,
                        ResultList = productsModel,
                        Message = "Success",
                        Result = null
                    };
                    return Json(message, JsonRequestBehavior.AllowGet);
                }
               
            }
            catch (Exception ex)
            {
                var message = new MessageResult<ProductModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = "Some error occured. Please contact the administrator.",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult SearchProduct(string name)
        {
            try
            {
                using (var context = new DBContext())
                {
                    var productRepository = new GenericRepository<ProductEntity>(context);

                    var productEntities = productRepository.Get(i => i.IsDeleted == false && i.Name.Contains(name)).OrderBy(i => i.Name).ToList();

                    TinyMapper.Bind<List<ProductEntity>, List<ProductModel>>();
                    var productsModel = TinyMapper.Map<List<ProductModel>>(productEntities);

                    var message = new MessageResult<ProductModel>
                    {
                        isError = false,
                        ResultList = productsModel,
                        Message = "Success",
                        Result = null
                    };
                    return Json(message, JsonRequestBehavior.AllowGet);
                }
                  
            }
            catch (Exception ex)
            {
                var message = new MessageResult<ProductModel>
                {
                    isError = true,
                    ResultList = null,
                    Message = "Some error occured. Please contact the administrator.",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult GetProduct(int id)
        {
            try
            {
                using (var context = new DBContext())
                {
                    var productRepository = new GenericRepository<ProductEntity>(context);

                    var productEntity = productRepository.Get(i => i.Id == id).First();

                    TinyMapper.Bind<ProductEntity, ProductModel>();
                    var productModel = TinyMapper.Map<ProductModel>(productEntity);

                    var message = new MessageResult<ProductModel>
                    {
                        isError = false,
                        ResultList = null,
                        Message = "Success",
                        Result = productModel
                    };
                    return Json(message, JsonRequestBehavior.AllowGet);
                }

            }
            catch (Exception ex)
            {
                var message = new MessageResult<ProductModel>
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
        [HttpPost]
        public ActionResult AddProduct(ProductFormModel newProduct)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.AddProduct(newProduct);
                var message = new MessageResult<ProductFormModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "Product added successfully!",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                var message = new MessageResult<ProductFormModel>
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

        #region PUT METHODS
        [HttpPut]
        public ActionResult UpdateProductCategory(int id, string name)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.UpdateProductCategory(id, name);
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "Product Category updated successfully!",
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
        [HttpPut]
        public ActionResult UpdateProduct(int id, ProductFormModel product)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.UpdateProduct(id, product);
                var message = new MessageResult<ProductModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "Product updated successfully!",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                var message = new MessageResult<ProductModel>
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
        [HttpDelete]
        public ActionResult DeleteProduct(int id)
        {
            try
            {
                var productBLL = new ProductBLL();
                productBLL.DeleteProduct(id);
                var message = new MessageResult<ProductCategoryModel>
                {
                    isError = false,
                    ResultList = null,
                    Message = "Success",
                    Result = null
                };
                return Json(message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
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