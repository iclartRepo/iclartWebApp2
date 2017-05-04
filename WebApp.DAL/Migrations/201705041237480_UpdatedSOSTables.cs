namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedSOSTables : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.SOSCustomEntities", "ClientId", "dbo.ClientEntities");
            DropIndex("dbo.SOSCustomEntities", new[] { "ClientId" });
            DropColumn("dbo.SOSCustomEntities", "ClientId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.SOSCustomEntities", "ClientId", c => c.Int(nullable: false));
            CreateIndex("dbo.SOSCustomEntities", "ClientId");
            AddForeignKey("dbo.SOSCustomEntities", "ClientId", "dbo.ClientEntities", "Id", cascadeDelete: true);
        }
    }
}
