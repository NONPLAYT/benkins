# Benkins - Maven & Gradle Builds Server

This is the repository of the backend for builds-page. The page can be found [here](https://nonplayt.github.io/benkins)

This kinda serves as a **"Continous Integration/Deployment"** Service for Maven & Gradle Projects which utilises static GitHub Pages. 

## How to add my project in benkins?
Information will be added soon.

## How it works?
The code itself is basically just a basic node.js Program.<br>
It reads repositories from 'resources/repos.json' and connects to the GitHub-API.<br>

### Example
```javascript
    // ...
    // Replace this with your username, repo and branch you wish to publish. For example: AwesomeUser/AwesomeProject:main
    "User/Repo:branch": {
        // Not supported yet
        "sonar": {
            "enabled": false
        },
        // What the builds will be prefixed with. "DEV" would make builds like "AwesomeProject - DEV 1 (githash)"
        "options": {
            "prefix": "DEV"
        },
        // What your project depends on. The number key indicates the minium build.
        // You can list any text or even links here.
        "dependencies": {
            "Minecraft Version(s)": {
                "1": "1.13.x, 1.14.x, 1.15.x, 1.16.x"
            }
        }
    }
}
```

###### This is like a Jenkins, but this is Benkins XD