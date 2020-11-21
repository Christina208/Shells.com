using Sabio.Models.Requests;
using System.Threading.Tasks;

namespace Sabio.Services
{
    public interface IUserService
    {
        Task<bool> LogInAsync(string email, string password);

        Task<bool> LogInTest(string email, string password, int id, string[] roles = null);      
    }
}