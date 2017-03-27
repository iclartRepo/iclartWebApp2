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
        #endregion
    }
}
