namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSoftDeleteBooleaninProduct : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductEntities", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductEntities", "IsDeleted");
        }
    }
}
