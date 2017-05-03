namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedFix : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SOSCustomEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SOSId = c.Int(nullable: false),
                        ClientId = c.Int(nullable: false),
                        ItemDescription = c.String(),
                        Quantity = c.Int(nullable: false),
                        Unit = c.String(),
                        Price = c.Double(nullable: false),
                        QuantityDelivered = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ClientEntities", t => t.ClientId)
                .ForeignKey("dbo.SOSEntities", t => t.SOSId)
                .Index(t => t.SOSId)
                .Index(t => t.ClientId);
            
            AddColumn("dbo.SOSProductEntities", "QuantityDelivered", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SOSCustomEntities", "SOSId", "dbo.SOSEntities");
            DropForeignKey("dbo.SOSCustomEntities", "ClientId", "dbo.ClientEntities");
            DropIndex("dbo.SOSCustomEntities", new[] { "ClientId" });
            DropIndex("dbo.SOSCustomEntities", new[] { "SOSId" });
            DropColumn("dbo.SOSProductEntities", "QuantityDelivered");
            DropTable("dbo.SOSCustomEntities");
        }
    }
}
