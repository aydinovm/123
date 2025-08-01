using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CHATTT.Models
{
    public class Ticket
    {
        public int Id { get; set; }

        [Required, MaxLength(255)]
        public string Title { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public virtual List<Message> Messages { get; set; }
    }
}
