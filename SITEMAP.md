# Impact Academy - Website Sitemap

## Overview
This sitemap outlines the complete structure of the Impact Academy website, a defense coaching academy platform built with Next.js.

---

## Static Pages

### Main Navigation
- **/** - Homepage
- **/about-us** - About Us page
- **/contact-us** - Contact Us page
- **/faq** - Frequently Asked Questions
- **/gallery** - Photo Gallery
- **/blog** - Blog Listing Page

### Additional Pages (Referenced but may need creation)
- **/privacy-policy** - Privacy Policy (referenced in Footer, needs creation)
- **/contact** - Contact page (referenced in Footer, may redirect to /contact-us)

---

## Dynamic Routes

### Written Exam Coaching Programs
Based on `programsData.ts` and navigation menu:
- **/written-exam-coaching/nda-written-coaching** - NDA/NA Officer Entry Exam Coaching
- **/written-exam-coaching/cds-written-coaching** - CDS Combined Defence Services Exam Coaching
- **/written-exam-coaching/afcat-written-coaching** - AFCAT Air Force Common Admission Test Coaching
- **/written-exam-coaching/capf-written-coaching** - CAPF Written Coaching (referenced in navigation, may need data)

### SSB Interview Services
Based on `ssbServiceData.ts` and navigation menu:
- **/ssb-interview/ssb-procedure** - Complete SSB 5-day selection process

### Blog Posts
- **/blog/[slug]** - Individual blog post pages (dynamic based on blog content)

### Branch Locations
- **/branches/[location]** - Individual branch location pages (dynamic based on branch data)

### SSB Help Topics
- **/ssb-help/[topic]** - SSB help and guidance topics (dynamic based on help content)

---

## Navigation Structure

### Main Menu Items
1. **Home** → `/`
2. **Written Exam Coaching** (Dropdown)
   - NDA Written Coaching → `/written-exam-coaching/nda-written-coaching`
   - CDS Written Coaching → `/written-exam-coaching/cds-written-coaching`
   - AFCAT Written Coaching → `/written-exam-coaching/afcat-written-coaching`
   - CAPF Written Coaching → `/written-exam-coaching/capf-written-coaching`
3. **SSB Interviews** (Dropdown)
   - SSB Procedure → `/ssb-interview/ssb-procedure`
4. **More** (Dropdown)
   - About Us → `/about-us`
   - Gallery → `/gallery`
   - Contact Us → `/contact-us`
   - Blogs → `/blog`

### Footer Links
- Privacy Policy → `/privacy-policy` (needs creation)
- Home → `/`
- Contact → `/contact` (may redirect to `/contact-us`)
- FAQ → `/faq`

---

## Data-Driven Content

### Programs Data (`src/data/programsData.ts`)
- **nda-written-coaching**: NDA/NA Officer Entry after 10+2
- **cds-written-coaching**: Combined Defence Services Exam
- **afcat-written-coaching**: Air Force Common Admission Test

### SSB Service Data (`src/data/ssbServiceData.ts`)
- **ssb-procedure**: Complete 5-day SSB selection process

### Blog Content
- Dynamic blog posts with slugs (stored in external CMS/API)

### Branch Data
- Multiple branch locations (dynamic based on data source)

---

## Missing Pages to Create

1. **/privacy-policy** - Privacy Policy page (referenced in Footer)
2. **/written-exam-coaching/capf-written-coaching** - CAPF program page (referenced in navigation but no data found)
3. **/contact** - Contact page (may redirect to /contact-us)

---

## File Structure Reference

```
src/app/
├── page.tsx                          # Homepage
├── layout.tsx                        # Root layout
├── about-us/
│   └── page.tsx                      # About Us
├── blog/
│   ├── page.tsx                      # Blog listing
│   └── [slug]/
│       └── page.tsx                  # Individual blog post
├── branches/
│   └── [location]/
│       └── page.tsx                  # Branch location page
├── contact-us/
│   └── page.tsx                      # Contact Us
├── faq/
│   └── page.tsx                      # FAQ
├── gallery/
│   └── page.tsx                      # Gallery
├── ssb-help/
│   └── [topic]/
│       └── page.tsx                  # SSB help topics
├── ssb-interview/
│   └── [service]/
│       └── page.tsx                  # SSB interview services
└── written-exam-coaching/
    └── [program]/
        └── page.tsx                  # Written exam coaching programs
```

---

## External Links

### Social Media (from Footer)
- Instagram: https://www.instagram.com/impact_academy_hyd
- YouTube: https://www.youtube.com/@impactacademyofhumanexcellence
- Facebook: https://www.facebook.com/impactacademysuccess/

### Contact Information
- Phone: +91 79890 50069, +91 97004 54572
- Email: iahepl.secunderabad@gmail.com
- Address: 59/1/2, 2nd floor, beside Karkhana traffic police station, karkhana, Secunderabad-500009

---

## Notes

1. **Dynamic Routes**: Many routes are dynamic and depend on external data sources (CMS, API)
2. **Missing Pages**: Some pages referenced in navigation/footer don't exist yet and need to be created
3. **URL Formatting**: URLs use kebab-case formatting (e.g., `nda-written-coaching`)
4. **Navigation Logic**: The Navigation component handles URL generation based on menu items
5. **SEO Considerations**: Each dynamic page should have proper metadata and SEO optimization

---

## Recommended Actions

1. Create missing pages: `/privacy-policy`, `/contact` (or redirect to `/contact-us`)
2. Add CAPF program data to `programsData.ts`
3. Ensure all dynamic routes have proper fallback/error handling
4. Implement proper sitemap.xml for SEO
5. Add robots.txt for search engine crawling instructions
