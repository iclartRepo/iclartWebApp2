namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddBackIsDeleted : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ClientEntities", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ClientEntities", "IsDeleted");
        }
    }
}
