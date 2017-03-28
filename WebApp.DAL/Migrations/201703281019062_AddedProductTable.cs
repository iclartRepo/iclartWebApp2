namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedProductTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ProductCategoryId = c.Int(nullable: false),
                        Name = c.String(),
                        CompanyPrice = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProductCategoryEntities", t => t.ProductCategoryId, cascadeDelete: true)
                .Index(t => t.ProductCategoryId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductEntities", "ProductCategoryId", "dbo.ProductCategoryEntities");
            DropIndex("dbo.ProductEntities", new[] { "ProductCategoryId" });
            DropTable("dbo.ProductEntities");
        }
    }
}
