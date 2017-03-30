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
    public class ProductBLL
    {
        private GenericRepository<ProductCategoryEntity> _categoryRepository;
        private GenericRepository<ProductEntity> _productRepository;
        private GenericRepository<CompetitorEntity> _competitorRepository;
        private GenericRepository<CompetitorPricesEntity> _competitorPricesRepository;
        private DBContext context = new DBContext();

        public ProductBLL()
        {
            _categoryRepository = new GenericRepository<ProductCategoryEntity>();
            context = _categoryRepository.GetContext();
            _productRepository = new GenericRepository<ProductEntity>(context);
            _competitorPricesRepository = new GenericRepository<CompetitorPricesEntity>(context);
            _competitorRepository = new GenericRepository<CompetitorEntity>(context);
        }
        #region Product Category
        public void AddProductCategory(string name)
        {
            if (ValidateIfCategoryExists(name, 0))
            {
                var newCategory = new ProductCategoryEntity
                {
                    Name = name,
                    CreatedDate = DateTime.Now
                };
                _categoryRepository.Insert(newCategory);
            }
            else
            {
                throw new Exception("Product Category already exists!");
            }          
        }
        public void UpdateProductCategory(int id, string name)
        {
            var categoryToUpdate = _categoryRepository.Get(i => i.Id == id).FirstOrDefault();
            if (categoryToUpdate != null)
            {
                categoryToUpdate.Name = name;
                categoryToUpdate.ModifiedDate = DateTime.Now;
                _categoryRepository.Update(categoryToUpdate);
            }
        }
        public void DeleteProductCategory(int id)
        {
            var category = _categoryRepository.Get(i => i.Id == id).FirstOrDefault();
            if (category != null)
            {
                category.IsDeleted = true;
                category.ModifiedDate = DateTime.Now;
                _categoryRepository.SoftDelete(category);
            }
            else
            {
                throw new Exception("Product Category does not exist!");
            }
        }
        #endregion

        #region Product
        public void AddProduct(ProductFormModel newProduct)
        {
            var exists = ValidateIfProductExists(newProduct.Product);
            if (exists)
            {
                TinyMapper.Bind<ProductModel, ProductEntity>();
                var productEntity = TinyMapper.Map<ProductEntity>(newProduct.Product);
                productEntity.CreatedDate = DateTime.Now;
                productEntity.CompetitorPrices = new List<CompetitorPricesEntity>();

                var productCategory = _categoryRepository.Get(i => i.Id == newProduct.ProductCategory.Id).First();                
                productEntity.ProductCategory = productCategory;

                if (newProduct.CompetitorPrices.Count != 0)
                {
                    TinyMapper.Bind<CompetitorPricesModel, CompetitorPricesEntity>();
                    for (int i = 0; i < newProduct.CompetitorPrices.Count; i++)
                    {
                        var competitorPrice = newProduct.CompetitorPrices[i];
                        var competitorPriceEntity = TinyMapper.Map<CompetitorPricesEntity>(competitorPrice);
                        var competitor = _competitorRepository.Get(y => y.Id == competitorPriceEntity.CompetitorId).First();
                        competitorPriceEntity.Competitor = competitor;
                        productEntity.CompetitorPrices.Add(competitorPriceEntity);
                    }
                }           

                _productRepository.Insert(productEntity);
            }
            else
            {
                throw new Exception("Product already exists!");
            }
        }

        #endregion

        #region Validations
        private bool ValidateIfCategoryExists(string name, int id)
        {
            var categories = _categoryRepository.Get();
            var categoryCheck = (from c in categories
                                 where c.Name.Trim(' ').ToLower() == name.Trim(' ').ToLower() && c.IsDeleted == false
                               select c).ToList();
            if (categoryCheck.Count == 0)
            {
                return true;
            }
            else if (id != 0 && id == categoryCheck[0].Id)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        private bool ValidateIfProductExists(ProductModel product)
        {
            var products = _productRepository.Get();
            var productCheck = (from c in products
                                where c.Name.Trim(' ').ToLower() == product.Name.Trim(' ').ToLower() && c.IsDeleted == false
                                 select c).ToList();
            if (productCheck.Count == 0)
            {
                return true;
            }
            else if (product.Id != 0 && product.Id == productCheck[0].Id)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        #endregion
    }
}
