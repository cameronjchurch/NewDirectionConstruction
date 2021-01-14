using System;

namespace NewDirectionConstruction.Models
{
    public class ContactInfo
    {
        public int Id { get; set; }
        public DateTime DateSent { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPhone { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerMessage { get; set; }
    }
}
