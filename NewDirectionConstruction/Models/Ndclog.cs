using System;

namespace NewDirectionConstruction.Models
{
    public partial class Ndclog
    {
        public int Id { get; set; }
        public DateTime LogTime { get; set; }
        public string Message { get; set; }
        public string Level { get; set; }
        public string Exception { get; set; }
        public string Stacktrace { get; set; }
        public string Logger { get; set; }
    }
}
