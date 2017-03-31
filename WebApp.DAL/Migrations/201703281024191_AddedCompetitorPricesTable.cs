namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedCompetitorPricesTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompetitorPricesEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ProductId = c.Int(nullable: false),
                        CompetitorId = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.CompetitorEntities", t => t.CompetitorId, cascadeDelete: true)
                .ForeignKey("dbo.ProductEntities", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId)
                .Index(t => t.CompetitorId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CompetitorPricesEntities", "ProductId", "dbo.ProductEntities");
            DropForeignKey("dbo.CompetitorPricesEntities", "CompetitorId", "dbo.CompetitorEntities");
            DropIndex("dbo.CompetitorPricesEntities", new[] { "CompetitorId" });
            DropIndex("dbo.CompetitorPricesEntities", new[] { "ProductId" });
            DropTable("dbo.CompetitorPricesEntities");
        }
    }
}
