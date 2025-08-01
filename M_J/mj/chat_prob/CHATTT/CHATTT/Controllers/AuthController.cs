using CHATTT.Data;
using Microsoft.AspNetCore.Mvc;

namespace CHATTT.Controllers
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Threading.Tasks;

    public class AuthController : Controller
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);

            if (user == null || user.PasswordHash != password) // Используй хеширование пароля
            {
                ViewBag.Error = "Неверный логин или пароль";
                return View();
            }

            // Сохраняем ID пользователя в Session
            HttpContext.Session.SetInt32("UserId", user.Id);

            return RedirectToAction("Index", "Chat");
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }
    }
}