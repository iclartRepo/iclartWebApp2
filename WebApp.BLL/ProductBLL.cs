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
        private GenericRepository<ProductCategoryEntity> _categoryRepository;
        private DBContext context;

        public ProductBLL()
        {
            _categoryRepository = new GenericRepository<ProductCategoryEntity>();
            context = _categoryRepository.GetContext();
        }
        #region Product Category
        public void AddProductCategory(string name)
        {
            var newCategory = new ProductCategoryEntity
            {
                Name = name,
                CreatedDate = DateTime.Now
            };
            _categoryRepository.Insert(newCategory);
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

    }
}
