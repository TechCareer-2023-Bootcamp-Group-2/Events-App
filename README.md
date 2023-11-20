# Events-App
Events App

# Starting WebApi Project:
When terminal in main folder (Events-App) migrate dbase with this command:

dotnet ef migrations add InitialCreate --context EventsDBContext --startup-project eventsapp.webapi --project eventsapp.dal

Then, enter eventsapp.webapi folder in terminal (cd eventsapp.webapi), type this two command :

dotnet build
dotnet watch