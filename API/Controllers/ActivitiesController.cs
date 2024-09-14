using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
namespace API.Controllers
{ 
     [ApiController]
    [Route("[controller]")]
    public class ActivitiesController  : ControllerBase
    {

        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context=context;            
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> getActivites()
        {
                return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]
          public async Task<ActionResult<Activity>> getActivity(Guid id)
        {
                return await _context.Activities.FindAsync(id);
        }
    }
}