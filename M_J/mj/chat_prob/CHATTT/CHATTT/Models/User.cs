using System.ComponentModel.DataAnnotations;
using System.Net.Sockets;

namespace CHATTT.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Username { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public virtual List<Ticket> Tickets { get; set; }
    }
}