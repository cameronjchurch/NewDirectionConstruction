namespace NewDirectionConstruction.Models.Configuration
{
    public class SendGridConfiguration
    {
        public const string EmailApi = "EmailApi";
        public string ApiKey { get; set; }
        public string AckTemplateId { get; set; }
        public string Sender { get; set; }
        public string WebProxy { get; set; }
        public string To { get; set; }
    }
}
