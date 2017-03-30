namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedCreatedAndModifiedDateProductTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductEntities", "CreatedDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.ProductEntities", "ModifiedDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductEntities", "ModifiedDate");
            DropColumn("dbo.ProductEntities", "CreatedDate");
        }
    }
}
