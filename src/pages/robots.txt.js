"use strict";
/**
 * Robots.txt API Route
 *
 * Dynamically generates the robots.txt file for search engine crawlers.
 * Allows all user agents to crawl the entire site and provides the sitemap location.
 *
 * Features:
 * - Allows all crawlers (User-agent: *)
 * - Permits crawling of all paths (Allow: /)
 * - References the sitemap for better indexing
 * - Normalizes site URL (removes trailing slash)
 * - Returns proper text/plain content type
 *
 * Route: /robots.txt
 *
 * @example
 * Generated output:
 * ```
 * User-agent: *
 * Allow: /
 *
 * Sitemap: https://example.com/sitemap-index.xml
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
var config_1 = require("../config");
/**
 * GET handler for robots.txt
 *
 * Generates the robots.txt content dynamically using the site URL from configuration.
 * Normalizes the URL by removing trailing slashes to ensure consistent sitemap URLs.
 *
 * @returns Response with robots.txt content and text/plain content type
 */
var GET = function () {
    /**
     * Normalizes the site URL by removing trailing slash
     *
     * Ensures the sitemap URL is consistently formatted without double slashes.
     */
    var siteUrl = config_1.siteConfig.url.endsWith('/')
        ? config_1.siteConfig.url.slice(0, -1)
        : config_1.siteConfig.url;
    var robotsTxt = "User-agent: *\nAllow: /\n\nSitemap: ".concat(siteUrl, "/sitemap-index.xml\n");
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
exports.GET = GET;
