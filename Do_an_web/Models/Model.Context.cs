﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Do_an_web.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CourseEntities1 : DbContext
    {
        public CourseEntities1()
            : base("name=CourseEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<gallery> galleries { get; set; }
        public virtual DbSet<menu> menus { get; set; }
        public virtual DbSet<service> services { get; set; }
        public virtual DbSet<teacher> teachers { get; set; }
        public virtual DbSet<sub_menu> sub_menu { get; set; }
    }
}
