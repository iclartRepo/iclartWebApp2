namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSOSConnectorTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SOSProductEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SOSId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProductEntities", t => t.ProductId, cascadeDelete: true)
                .ForeignKey("dbo.SOSEntities", t => t.SOSId, cascadeDelete: true)
                .Index(t => t.SOSId)
                .Index(t => t.ProductId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SOSProductEntities", "SOSId", "dbo.SOSEntities");
            DropForeignKey("dbo.SOSProductEntities", "ProductId", "dbo.ProductEntities");
            DropIndex("dbo.SOSProductEntities", new[] { "ProductId" });
            DropIndex("dbo.SOSProductEntities", new[] { "SOSId" });
            DropTable("dbo.SOSProductEntities");
        }
    }
}
