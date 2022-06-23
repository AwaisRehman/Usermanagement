using System.Text;
using Claim.Data;
using Claim.Data.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//CORS Origin Policy Name
var _loginOrigin="_localorigin";

//JWT Service
builder.Services.Configure<JWTConfig>(builder.Configuration.GetSection("JWTConfig"));

//Server Connection String
string ConnectionStr = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<AppDBContext>(options => options.UseSqlServer(ConnectionStr));

//Microsoft Identity 
builder.Services.AddIdentity<AppUser,IdentityRole>(opt=>{}).AddEntityFrameworkStores<AppDBContext>();

//JWT Token
string JWTConnectionStr = builder.Configuration["JWTConfig:Key"];
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>{

var key = Encoding.ASCII.GetBytes(JWTConnectionStr);
var issuer = builder.Configuration["JWTConfig:Issuer"];
var audience = builder.Configuration["JWTConfig:Audience"];

options.TokenValidationParameters = new TokenValidationParameters() {
 ValidateIssuerSigningKey = true,
 IssuerSigningKey = new SymmetricSecurityKey(key),
 ValidateIssuer=true,
 ValidateAudience=true,
 RequireExpirationTime = true,
 ValidIssuer = issuer,
 ValidAudience =  audience
};


});

//CORS Policy Name ADD
   builder.Services.AddCors(p => p.AddPolicy(_loginOrigin,builder =>
    {
        builder.AllowAnyOrigin();
        builder.AllowAnyHeader();
        builder.AllowAnyMethod();
    })
    );

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(_loginOrigin);
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
