# Benkins - Maven & Gradle Builds Server

This is the repository of the backend for builds-page. The page can be found [here](https://nonplayt.github.io/benkins)

This kinda serves as a **"Continous Integration/Deployment"** Service for Maven & Gradle Projects which utilises static GitHub Pages. 

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=NONPLAYT_benkins&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=NONPLAYT_benkins)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=NONPLAYT_benkins&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=NONPLAYT_benkins)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=NONPLAYT_benkins&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=NONPLAYT_benkins)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=NONPLAYT_benkins&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=NONPLAYT_benkins)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=NONPLAYT_benkins&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=NONPLAYT_benkins)

## How to add my project in benkins?
This is a very simple process. Just create this issue [here](https://github.com/NONPLAYT/benkins/issues/new?assignees=&labels=request&template=project_add_request.yml) and fill out the form. If you fill out the form correctly, your project will be added to the list soon.

## How it works?
The code itself is basically just a basic node.js Program.<br>
It reads repositories from 'resources/repos.json' and connects to the GitHub-API.<br>

### Example
```javascript
    // ...
    // Replace this with your username, repo and branch you wish to publish. For example: AwesomeUser/AwesomeProject:main
    "User/Repo:branch": {
        // Enabling sonar will make the build fail if the sonar quality gate fails. This is only supported for maven projects and not yet implemented to benkins.
        "sonar": {
            "enabled": false
        },
        // What the builds will be prefixed with. "DEV" would make builds like "AwesomeProject - DEV 1 (githash)"
        // createJar just creates a jar file of the project.
        // buildTool is the build tool you use. Currently only maven and gradle are supported.
        "options": {
            "prefix": "DEV",
            "createJar": true,
            "buildTool": "maven" // or gradle
        },
        // What your project depends on. The number key indicates the minium build.
        // You can list any text or even links here.
        "dependencies": {
            "Minecraft Version(s)": {
                "1": "1.13.x - 1.19.x"
            }
        }
    }
}
```

###### This is like a Jenkins, but this is Benkins XD