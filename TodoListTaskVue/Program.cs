using Microsoft.Extensions.FileProviders;

namespace testingVue;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddDirectoryBrowser(); // Enable directory browsing

        var app = builder.Build();

        // Serve default files and static files from wwwroot
        app.UseDefaultFiles();
        app.UseStaticFiles();

        // Serve files from node_modules
        app.UseFileServer(new FileServerOptions
        {
            FileProvider = new PhysicalFileProvider(
                Path.Combine(builder.Environment.ContentRootPath, "node_modules")),
            RequestPath = "/node_modules",
            EnableDirectoryBrowsing = true // Enable directory browsing
        });

        app.Run();
    }
}