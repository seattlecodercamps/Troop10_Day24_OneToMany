using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Day24.Data;
using Microsoft.EntityFrameworkCore;
using Day24.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Day24.API
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        // create connection to database
        private ApplicationDbContext _db;
        public MovieController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_db.Movies.ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var categoryWithMovies = _db.Categories.Where(c => c.Id == id).Include(c => c.Movies).FirstOrDefault();

            return Ok(categoryWithMovies);
        }

        // POST api/values
        [HttpPost("{id}")]
        public IActionResult Post(int id, [FromBody]Movie movieToCreate)
        {
            var category = _db.Categories.Where(c => c.Id == id).Include(c => c.Movies).FirstOrDefault();
            category.Movies.Add(movieToCreate);
            _db.SaveChanges();
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
