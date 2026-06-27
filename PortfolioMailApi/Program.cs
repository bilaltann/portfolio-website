using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using PortfolioMailApi.Models;

var builder = WebApplication.CreateBuilder(args);

// 1. React uygulamasının API'ye istek atabilmesi için CORS ayarı (Vite genelde 5173 portunu kullanır)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://34.229.166.36") // React projenin adresini buraya yaz
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// CORS'u aktif et
app.UseCors("AllowReactApp");

// 2. Mail gönderme Endpoint'i (POST /api/contact)
app.MapPost("/api/contact", async ([FromBody] ContactForm form, IConfiguration config) =>
{
    try
    {
        // Ayarları appsettings.json'dan çek
        var mailSettings = config.GetSection("MailSettings").Get<MailSettings>();

        // SMTP İstemcisini ayarla
        var smtpClient = new SmtpClient(mailSettings!.Host, mailSettings.Port)
        {
            Credentials = new NetworkCredential(mailSettings.Username, mailSettings.Password),
            EnableSsl = true
        };

        // Mail içeriğini oluştur
        var mailMessage = new MailMessage
        {
            From = new MailAddress(mailSettings.From),
            Subject = $"Portfolyo İletişim Formu: {form.Name}",
            Body = $"Ad Soyad: {form.Name}\nE-Posta: {form.Email}\n\nMesaj:\n{form.Message}",
            IsBodyHtml = false,
        };

        // Kime gidecek? (Kendi okuyacağın adres)
        mailMessage.To.Add("bilaltan070@gmail.com");

        // İPUCU: Maile "Yanıtla" dediğinde direkt formu dolduran kişinin adresine yanıt verebilmen için:
        mailMessage.ReplyToList.Add(form.Email);

        // Maili gönder
        await smtpClient.SendMailAsync(mailMessage);

        return Results.Ok(new { message = "Mesajınız başarıyla gönderildi." });
    }
    catch (Exception ex)
    {
        // Hata durumunda bilgi dön
        return Results.Problem($"Mail gönderilirken bir hata oluştu: {ex.Message}");
    }
});

app.Run();
