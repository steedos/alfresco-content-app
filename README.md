<p align="left"> <img title="Alfresco" src="alfresco.png" alt="Alfresco - make business flow"></p>

# Alfresco Content Application

Testing Supported By<br/>
<img width="160" src="docs/images/Browserstack-logo.svg" alt="BrowserStack"/>

## Introduction

The Alfresco Content Application a content management application built using
[Alfresco Application Development Framework (ADF)](https://github.com/Alfresco/alfresco-ng2-components) components
and was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Who is this application for

The Content Application is a streamlined experience for end users on top of Alfresco Content Services, focused on file management within the Alfresco content repository. It provides developers with an easily extendable environment for lightning fast custom application development by providing safe ways to inject custom controls, viewer components, pages and plug-ins without upgrade concerns.

### Where to get help

There are a number of resources available to help get you started with the Content App and the ADF:

- [Gitter Chat](https://gitter.im/Alfresco/content-app) - Developer community chat
- [Content App Documentation](https://alfresco-content-app.netlify.com/) - Developer documentation
- [Alfresco ADF Documentation](https://www.alfresco.com/abn/adf/) - Application Development Framework documentation
- [Alfresco Community Portal](https://community.alfresco.com/) - Developer Community Forums
- [Alfresco Customer Support](https://support.alfresco.com/) - Customer support for the Alfresco Digital Workspace

### Raising issues and feature requests

Issues can be raised in [GitHub] or in the Alfresco JIRA project.
Please include a clear description, steps to reproduce and screenshots where appropriate. All issues will be reviewed; bugs will be categorized if reproducible and enhancement/feature suggestions will be considered against existing priorities if the use case serves a general-purpose need.

#### Features added in the latest release

- Edit Offline - lock and download files whilst editing
- Edit Online - edit files directly in Microsoft Office 
- [Alfresco Full Text Search (FTS) syntax](https://alfresco-content-app.netlify.com/#/features/search-results?id=alfresco-full-text-search) - enhanced search input to support the Alfresco Search Query Language
- [Single Sign-On](https://alfresco-content-app.netlify.com/#/getting-started/sso) (SSO) support with Alfresco Identity Service and ADF 3.0.0, basic Kerberos support

Please refer to the [release notes] for details of all changes.

#### High level feature themes planned for 2019
- Extensibility
  - Building on the existing framework to further enhance the developer experience
- Collaboration & File Management
  - Folder rule creation
  - File/Folder linking via secondary association
- File Library Management
  - For managers: manage Library users and requests to join
- Enhanced UI and user experience
  - New language translations (Arabic, Czech, Danish, Finnish, Polish and Swedish).
  - Accessibility WCAG AA compliance
  - Search result facet improvements
  - Search query input assistance
  - Metadata information drawer enhancements

### Want to help

Want to file a bug, contribute some code, or improve documentation? Excellent!
Read up on our guidelines for [contributing] and then check out one of our issues in the [Jira] or [GitHub].

## Compatibility

| ACA Version | Built with | Tested on |
| ----------- | ---------- | --------- |
| ACA 1.7     | ADF 3.0.0  | ACS 6.1   |
| ACA 1.6     | ADF 2.6.1  | ACS 6.1   |
| ACA 1.5     | ADF 2.6.0  | ACS 6.0   |
| ACA 1.4     | ADF 2.5.0  | ACS 6.0   |
| ACA 1.3     | ADF 2.4.0  | ACS 6.0   |
| ACA 1.2     | ADF 2.3.0  | ACS 5.2   |
| ACA 1.1     | ADF 2.2.0  | ACS 5.2   |
| ACA 1.0     | ADF 2.0.0  | ACS 5.2   |

## Available Features

| Version | Feature                    | Description                                                                                                                                                                                    |
| ------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5     | My Files                   | Folder/File browsing of Personal Files.                                                                                                                                                        |
| 1.5     | File Libraries             | Create, find, join and browse the file libraries of sites created in the repository.                                                                                                           |
| 1.5     | Shared Files               | Lists all files that have shared.                                                                                                                                                              |
| 1.5     | Recent Files               | List files created and/or modified by the logged users within the last 30 days.                                                                                                                |
| 1.5     | Favorites                  | Lists all favorite files for the user.                                                                                                                                                         |
| 1.5     | Trash                      | Lists all deleted items stored in the trash can, users can restore or permanently remove. Admin user will see items deleted by all users.                                                      |
| 1.5     | Upload                     | Files and folders can be uploaded through the New button or by dragging and dropping into the browser.                                                                                         |
| 1.5     | Search                     | Quick search with live results, and full faceted search results page.                                                                                                                          |
| 1.5     | Actions                    | A number of actions can be performed on files and/or folders, either individually or multiples at a time.                                                                                      |
| 1.5     | Viewer                     | Viewing files in natively in the browser, unsupported formats are transformed by the repository.                                                                                               |
| 1.5     | Metadata                   | The information drawer can be configured in the app.config.json to display metadata information, by default file the Properties Aspect is shown and images will also include EXIF information. |
| 1.5     | File Sharing               | Share files, with time expiry if required, externally with uniquely generated URLs.                                                                                                            |
| 1.5     | Versioning                 | The version manager provides access and management of previous file versions, and the ability to upload new versions.                                                                          |
| 1.5     | Permissions                | Granular user permission management of the folders and files throughout the repository.                                                                                                        |
| 1.5     | Extensibility              | The application provides safe extension points allowing full customisation; see [Documentation](https://alfresco-content-app.netlify.com/#/extending/) for details.                            |
| 1.6     | Library management         | Join and favorite libraries. New search input to find Libraries, files and/or folders.                                                                                                         |
| 1.7     | Edit Offline               | Lock and unlock for editing, download current version, upload new version.                                                                                                                     |
| 1.7     | Edit with Microsoft Office | Extension to edit online with Alfresco Office Services (AOS)                                                                                                                                   |
| 1.7     | Single Sign-On (SSO)       | Support for Alfresco Identity Service, with ADF 3.0.0    |        
| 1.7     | Search Query Language     | Enhanced search input using the Alfresco Search Query Language    |        

[contributing]: https://github.com/Alfresco/alfresco-content-app/blob/master/CONTRIBUTING.md
[github]: https://github.com/Alfresco/alfresco-content-app/issues
[jira]: https://issues.alfresco.com/jira/projects/ACA
[release notes]: https://github.com/Alfresco/alfresco-content-app/releases

# Storage on S3
https://github.com/steedos/alfresco-s3-adapter