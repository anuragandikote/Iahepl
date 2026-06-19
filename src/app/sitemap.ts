import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.impactacademyofhumanexcellence.com/' // Replace with actual domain

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Written exam coaching programs
  const programs = [
    'nda-written-coaching',
    'cds-written-coaching',
    'afcat-written-coaching',
    'capf-written-coaching',
  ]

  const programPages: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${baseUrl}/written-exam-coaching/${program}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // SSB interview services
  const ssbServices = ['ssb-procedure']

  const ssbServicePages: MetadataRoute.Sitemap = ssbServices.map((service) => ({
    url: `${baseUrl}/ssb-interview/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Note: Dynamic routes like blog posts, branches, and ssb-help topics
  // should be fetched from your API/CMS and added here
  // For now, we're including the static routes

  return [...staticPages, ...programPages, ...ssbServicePages]
}
