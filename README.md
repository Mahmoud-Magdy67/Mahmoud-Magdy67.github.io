# Mahmoud Magdy — portfolio

A static, bilingual one-page portfolio for GitHub Pages. No build step or dependencies are needed.

## Edit the content

All visible page copy, profile links, and project entries live in `content.js`. Edit the `en` and `fr` objects together to keep both languages current. The language toggle remembers the visitor's choice in their browser.

The profile illustration is `assets/profile-placeholder.svg`. To use a real photo, add it to `assets/`, update `profile.photo` in `content.js`, and adjust the alt text in both languages.

## Add a project

Add one object to `portfolio.projects` in `content.js`:

```js
{
  title: { en: "Project name", fr: "Nom du projet" },
  description: { en: "Challenge, approach and result", fr: "Défi, méthode et résultat" },
  tools: ["Power BI", "SQL"],
  image: "assets/project-name.jpg",
  demoUrl: "https://example.com",
  repoUrl: "https://example.com/code"
}
```

The three “Coming soon” cards appear only while the array is empty. When projects are added, the page displays those entries. Omit `image`, `demoUrl`, or `repoUrl` if unavailable; missing links appear disabled.

## Add the CV

The public CV is at `assets/Mahmoud_Magdy_CV.pdf`. Its phone number was removed to keep the website phone-free; the original supplied PDF was not changed. The download button checks that the file exists before becoming active.

## Preview and publish

Open `index.html` through a local HTTP server, such as `python -m http.server 8000`, then visit `http://localhost:8000`. The CV availability check needs HTTP.

For GitHub Pages, publish the repository `Mahmoud-Magdy67.github.io` from the `main` branch and `/ (root)`. The public URL is `https://mahmoud-magdy67.github.io/`.
