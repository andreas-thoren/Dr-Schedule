# Doctors day schedule
Made for swedish Anaesthetists in Skövde. Schedule is created/edited in project excel file (dr_schedule.xlsm). Excel file is heavily empovered by vba. Every day schedule is exported and saved as an xml-file in .Database/Schedules folder. xml-files are reimported when days are changed in the excel file. No regular save of the excel file itself takes place other then if DevMode is set to True. Only xml-files are updated. You can also publish the schedules for viewing as a webpage. The main webpage file is static/schedule.html. This page uses iframe to embedd the actual day schedules, for ex Måndag.html etc.

## Technical limitiations
This project does not have a proper front-end <--> backend <--> database setup. This is due to limitations where I work. We dont have access to backends and databases for small department projects. We therefore have to make due with the tools we have. In this case Microsoft Office and Microsoft Edge. This projects design is a direct result of this and in many ways utilises ugly (but safe) hacks to bypass the fact that the project hasn't got access to a backend or a database. On the plus side this means it can be utilised by others in the same context.

## Setup
1) Download repo. Note: Excel file is downloaded with DevMode = "True" (see Config sheet).
2) Move repo to desired location
3) Open excel file dr_schedule.xlsm
4) In config sheet push 'Uppdatera ...' button
5) Make sure all paths on config sheet are correct and as desired. The .Database folder and static folders can be moved but then the paths in the config sheets need to be updated to reflect this for xml export/import and publishing of html files to work.
6) When ready push the 'Lås och spara' button to set DevMode = "False" and prepare file for normal usage.
7) If you want to change the project password open the vba editor and goto modGlobalVariables. Change the value of SIMPLEPSW to what you desire. Not that you should not change the name SIMPLEPSW but the value to the right of the equal sign in between the "" signs. When finished it should look like this  
Public Const SIMPLEPSW As String = "your_chosen_password"  
8) If you want extra security look the vba project (google it).
9) Post in the Tabeller sheets can be modified by normal users.
10) Changing the number of sections in the main Bemanning sheet will require more work and updating of the xml mappings and tabel references.
11) Dont move cells unless necessary. If you have to make sure the named ranges still references the correct parts of the sheets. The named ranges are used by the vba code so if they get messed up expect a barrage of error messages...

## Usage
- There is a word document, user_instructions.docx, with instructions to the user.