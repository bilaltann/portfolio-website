# Build aşaması
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["PortfolioMailApi.csproj", "./"]
RUN dotnet restore "PortfolioMailApi.csproj"
COPY . .
RUN dotnet publish "PortfolioMailApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Çalıştırma aşaması
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "PortfolioMailApi.dll"]
