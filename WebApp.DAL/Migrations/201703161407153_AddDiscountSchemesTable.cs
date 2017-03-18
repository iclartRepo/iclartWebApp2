namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDiscountSchemesTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompetitorDiscountSchemesEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CompetitorId = c.Int(nullable: false),
                        ClientId = c.Int(nullable: false),
                        DiscountScheme = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ClientEntities", t => t.ClientId, cascadeDelete: true)
                .ForeignKey("dbo.CompetitorEntities", t => t.CompetitorId, cascadeDelete: true)
                .Index(t => t.CompetitorId)
                .Index(t => t.ClientId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CompetitorDiscountSchemesEntities", "CompetitorId", "dbo.CompetitorEntities");
            DropForeignKey("dbo.CompetitorDiscountSchemesEntities", "ClientId", "dbo.ClientEntities");
            DropIndex("dbo.CompetitorDiscountSchemesEntities", new[] { "ClientId" });
            DropIndex("dbo.CompetitorDiscountSchemesEntities", new[] { "CompetitorId" });
            DropTable("dbo.CompetitorDiscountSchemesEntities");
        }
    }
}
