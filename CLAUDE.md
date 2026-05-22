# External Portfolio — Knowledge Base

## What This Folder Is
This is **Sanket Kamble's external hiring portfolio** — for non-SAP companies. It is a parallel version of the SAP-internal portfolio with SAP-restricted links replaced by personal Figma links or removed entirely.

**Path:** `~/Documents/SAP Resume/Portfolio/External_portfolio/`

## Sister Folder — SAP Internal Portfolio
The original, SAP-internal version lives at:

**Path:** `~/Documents/SAP Resume/Portfolio/Claude_product_space/`

---

## Key Differences vs SAP Internal Portfolio

| What | SAP Internal | External (This Folder) |
|---|---|---|
| **Industrial Systems Figma** | SAP internal Figma file | Personal Figma: `figma.com/design/aB855BOX9E0VtpMmRn8f4P/Industrial-System-SAP` |
| **Reference Objects Figma** | 3 SAP Figma links | ⏳ Pending personal Figma links from user |
| **Ariba SharePoint link** | Included | Removed |
| **Invent/Asian Paints SharePoint** | Included | Removed |
| **Yokogawa video SharePoint links** | 3 video links included | Removed |
| **Resume file** | `Resume_SanketKamble.pdf` (SAP resume) | User will add separate external resume |
| **AR Assistant Figma** | SAP Figma (if linked in future) | User will provide personal Figma when available |

---

## Sync Rules — What This Folder Receives from SAP Internal

Changes made in `Claude_product_space/` should be mirrored here UNLESS they involve:
- SAP-internal Figma URLs
- SAP SharePoint links
- The resume PDF

**Propagate from SAP internal to this folder:**
- Project content updates (descriptions, outcomes, contributions)
- New projects
- UI/layout changes
- New images
- Case study HTML updates

When making any content update in the SAP internal folder, **always check if it should also be applied here**.

---

## How to Add Personal Figma Links

When user provides a personal Figma link for a project:
1. Open `data/projects.js` in this folder
2. Find the project by `id` or `title`
3. Replace the `// TODO` comment with the link entry:

```js
{
  title: "View Design Work →",
  url: "https://www.figma.com/design/YOUR_PERSONAL_FILE_ID/...",
  noProtectedBadge: true,
}
```

---

## Projects with Pending Personal Figma Links

User is creating personal Figma versions of SAP projects. As they're ready, update `data/projects.js`:

| Project ID | Project Name | Status |
|---|---|---|
| 2 | Industrial Systems - SAP EAM | ✅ Done — `figma.com/design/aB855BOX9E0VtpMmRn8f4P/Industrial-System-SAP` |
| 4 | Reference Objects in Private Cloud | ⏳ User will provide |
| 1 | AR Assistant for Joule | ⏳ User will provide (if creating personal Figma) |

---

## Resume
- This folder does NOT yet have an external-audience resume.
- User will add a separate resume file here.
- Do NOT copy `Resume_SanketKamble.pdf` from the SAP internal folder.
- When user adds the external resume, update the download link in `app/page.tsx` (line ~892) and `script.js`/`index.html` if needed.

---

## What Has Been Removed from External Version

These links from the SAP internal portfolio are **intentionally absent** here because they require SAP network/SSO access:

- `sap-my.sharepoint.com` — all SharePoint links (3 projects affected)
- SAP-internal Figma files (project-specific SAP Figma URLs)
- Any future `sap.com` internal tool links

---

## Tech Stack
Same as SAP internal:
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- Project data: `data/projects.js`
- Main page: `app/page.tsx`
- Static HTML fallback: `index.html` + `script.js` + `styles.css`
