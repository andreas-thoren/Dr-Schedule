# Doctors Day Schedule

Designed for Swedish Anaesthetists in Skövde. The schedule is created/edited in the project's Excel file (dr_schedule.xlsm), which utilizes VBA scripting. Each day's schedule is exported and saved as an XML file in the `.Database/Schedules` folder. XML files are reimported when the date field is updated with a value that already exists as an XML file. Regular saving of the Excel file itself only occurs if DevMode is set to True. Only XML files are updated/created upon saving. Schedules can also be published for viewing as a webpage. The main webpage file is `static/schedule.html`. This page uses an iframe to embed the actual day schedules, for example, Måndag.html, etc.

## Technical Limitations

This project lacks a proper front-end <--> backend <--> database setup due to limitations at the workplace. There's no access to backends and databases for small department projects. Thus, we make do with the tools at hand: Microsoft Office and Microsoft Edge. The project's design is a direct result of this. On the plus side, this means it can be utilized by others in a similar context.

## Setup

1. Download the repository. Note: The Excel file is downloaded with DevMode set to "True" (see Config sheet).
2. Move the repository to the desired location.
3. Open the Excel file `dr_schedule.xlsm`.
4. On the Config sheet, click the 'Uppdatera ...' button.
5. Ensure all paths on the Config sheet are correct and as desired. The `.Database` folder and `static` folder can be moved, but then the paths in the Config sheets need to be updated to reflect this for XML export/import and publishing of HTML files to work.
6. When ready, click the 'Lås och spara' button which automatically will set DevMode to "False", prepare the file for normal usage and finally save the file.
7. To change the project password, open the VBA editor and go to `modGlobalVariables`. Change the value of `SIMPLEPSW` to your desired password. Note that you should not change the name `SIMPLEPSW` but only the value to the right of the equal sign between the double quotation marks. When finished, it should look like this:
```vba
Public Const SIMPLEPSW As String = "your_chosen_password"
```

## Usage
There are user instructions in Swedish here:  
[Användarinstruktion - Svenska](https://andreas-thoren.github.io/Dr-Schedule/docs/user_info_swedish.html)

## Demo
Follow link to see a demo of how the web files looks lika after being published by excel file:  
[Schedule Web page example](https://andreas-thoren.github.io/Dr-Schedule/static/schedule.html)

## Repository
The repository itself is located at:  
[Dr-Schedule repository](https://github.com/andreas-thoren/Dr-Schedule)