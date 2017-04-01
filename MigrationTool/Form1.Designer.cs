namespace MigrationTool
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.migrate = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // migrate
            // 
            this.migrate.Location = new System.Drawing.Point(93, 28);
            this.migrate.Name = "migrate";
            this.migrate.Size = new System.Drawing.Size(117, 39);
            this.migrate.TabIndex = 0;
            this.migrate.Text = "Start Migration";
            this.migrate.UseVisualStyleBackColor = true;
            this.migrate.Click += new System.EventHandler(this.migrate_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(294, 108);
            this.Controls.Add(this.migrate);
            this.Name = "Form1";
            this.Text = "Migration Tool";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button migrate;
    }
}

