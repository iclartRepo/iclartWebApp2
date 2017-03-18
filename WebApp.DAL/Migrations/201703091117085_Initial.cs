namespace WebApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ClientEntities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        TIN = c.String(),
                        Office_Address = c.String(),
                        Warehouse_Address = c.String(),
                        Credit_Limit = c.Double(nullable: false),
                        Dealer = c.Boolean(nullable: false),
                        Accounts_Receivables = c.Double(nullable: false),
                        Credit_Terms = c.String(),
                        Discount_Scheme = c.Double(nullable: false),
                        Agent = c.Boolean(nullable: false),
                        Contacts_Order = c.String(),
                        Contacts_Accounting = c.String(),
                        Telephone_Number = c.String(),
                        Fax_Number = c.String(),
                        Email = c.String(),
                        Rounded_Payment = c.Boolean(nullable: false),
                        Usual_Ordered_Item = c.String(),
                        Witholding_Tax = c.Double(nullable: false),
                        Vat_Exemption = c.Boolean(nullable: false),
                        Collection_Period = c.String(),
                        Combine_Items = c.Boolean(nullable: false),
                        Overpayment_Counter = c.Double(nullable: false),
                        Created_Date = c.DateTime(nullable: false),
                        Modified_Date = c.DateTime(),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ClientEntities");
        }
    }
}
