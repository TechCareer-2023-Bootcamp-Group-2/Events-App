﻿using AutoMapper;
using eventsapp.bll.Abstract;
using eventsapp.entity;
using eventsapp.webapi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompaniesController : ControllerBase
    {
        private ICompaniesService _companiesService;
        private readonly IMapper _mapper;

        public CompaniesController(ICompaniesService companiesService, IMapper mapper)
        {
            _companiesService = companiesService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(_mapper.Map<List<CompaniesModel>>(await _companiesService.GetAsync()));
        }

        [HttpPost]
        public async Task<IActionResult> Post(CompaniesCreateModel model)
        {
            if (ModelState.IsValid)
            {
                var newCompany = _mapper.Map<Companies>(model);
                await _companiesService.AddAsync(newCompany);
            }
            return Ok(HttpStatusCode.Created);
        }
    }
}