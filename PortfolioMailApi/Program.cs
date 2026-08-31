using System.Net.Http.Headers;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc;
using PortfolioMailApi.Models;

var builder = WebApplication.CreateBuilder(args);

// CORS Ayarları
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("https://bilaltan.com", "https://www.bilaltan.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// HTTP istekleri atabilmek için HttpClient servisini ekliyoruz
builder.Services.AddHttpClient();

var app = builder.Build();

app.UseCors("AllowReactApp");

app.MapPost("/api/contact", async ([FromBody] ContactForm form, IConfiguration config, IHttpClientFactory httpClientFactory) =>
{
    try
    {
        // Anahtarı Render'dan çekeceğiz
        var apiKey = config["ResendAPIKey"];
        var client = httpClientFactory.CreateClient();
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

        var emailData = new
        {
            from = "Portfolio Contact <onboarding@resend.dev>", // Ücretsiz sürüm zorunluluğu
            to = new[] { "bilaltanbt07@gmail.com" }, // Kendi Gmail adresin (Resend'e kayıt olduğun adres olmalı)
            reply_to = form.Email, // Ziyaretçinin adresi (Yanıtla dediğinde ona gider)
            subject = $"Portfolyo İletişim Formu: {form.Name}",
            text = $"Ad Soyad: {form.Name}\nE-Posta: {form.Email}\n\nMesaj:\n{form.Message}"
        };

        var response = await client.PostAsJsonAsync("https://api.resend.com/emails", emailData);

        if (response.IsSuccessStatusCode)
        {
            return Results.Ok(new { message = "Mesajınız başarıyla gönderildi." });
        }

        var errorDetails = await response.Content.ReadAsStringAsync();
        return Results.Problem($"Resend API Hatası: {errorDetails}");
    }
    catch (Exception ex)
    {
        return Results.Problem($"Sunucu Hatası: {ex.Message}");
    }
});

app.Run();