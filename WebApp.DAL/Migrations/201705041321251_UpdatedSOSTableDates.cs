namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedSOSTableDates : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.SOSEntities", "CreatedDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.SOSEntities", "ModifiedDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.SOSEntities", "ModifiedDate");
            DropColumn("dbo.SOSEntities", "CreatedDate");
        }
    }
}
