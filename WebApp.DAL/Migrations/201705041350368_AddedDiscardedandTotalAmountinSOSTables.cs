namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedDiscardedandTotalAmountinSOSTables : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.SOSEntities", "TotalAmount", c => c.Double(nullable: false));
            AddColumn("dbo.SOSProductEntities", "Discarded", c => c.Boolean(nullable: false));
            AddColumn("dbo.SOSCustomEntities", "Discarded", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.SOSCustomEntities", "Discarded");
            DropColumn("dbo.SOSProductEntities", "Discarded");
            DropColumn("dbo.SOSEntities", "TotalAmount");
        }
    }
}
