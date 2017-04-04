namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedClientDatabase : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ClientEntities", "Agent", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ClientEntities", "Agent", c => c.Boolean(nullable: false));
        }
    }
}
