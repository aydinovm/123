using CHATTT.Data;
using CHATTT.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CHATTT.Controllers
{
    public class ChatController : Controller
    {
        private readonly AppDbContext _context;

        public ChatController(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index(int ticketId)
        {
            // Проверяем, есть ли сессия пользователя
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null)
            {
                return RedirectToAction("Login", "Auth");
            }

            var messages = await _context.Messages
                .Where(m => m.TicketId == ticketId)
                .Include(m => m.User)
                .OrderBy(m => m.SentAt)
                .ToListAsync();

            ViewBag.TicketId = ticketId;
            return View(messages);
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(int ticketId, string messageText)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null)
            {
                return RedirectToAction("Login", "Auth");
            }

            var message = new Message
            {
                TicketId = ticketId,
                UserId = userId.Value,
                Text = messageText,
                SentAt = DateTime.Now,
                IsRead = false
            };

            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index", new { ticketId });
        }
    }
}