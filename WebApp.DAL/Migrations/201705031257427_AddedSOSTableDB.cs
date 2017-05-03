namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSOSTableDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SOSEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ClientId = c.Int(nullable: false),
                        Sos_Date = c.DateTime(nullable: false),
                        Remarks = c.String(),
                        Status = c.Boolean(nullable: false),
                        Pickup = c.Boolean(nullable: false),
                        Exported = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ClientEntities", t => t.ClientId, cascadeDelete: true)
                .Index(t => t.ClientId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SOSEntities", "ClientId", "dbo.ClientEntities");
            DropIndex("dbo.SOSEntities", new[] { "ClientId" });
            DropTable("dbo.SOSEntities");
        }
    }
}
