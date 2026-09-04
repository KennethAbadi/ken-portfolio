"use strict";
/**
 * Reading Time Utility
 *
 * Calculates estimated reading time based on word count for technical content.
 * Uses a conservative reading speed of 200 words per minute, which accounts for
 * the more careful reading typically required for technical and engineering content.
 *
 * Features:
 * - Removes code blocks before counting (they're processed separately)
 * - Counts actual words (filters empty strings)
 * - Enforces minimum of 1 minute reading time
 * - Provides formatted output for display
 *
 * Reading Speed:
 * - 200 WPM for technical/engineering content (more careful reading)
 * - Standard reading is typically 200-250 WPM
 *
 * @module readingTime
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateReadingTime = calculateReadingTime;
exports.formatReadingTime = formatReadingTime;
exports.getReadingTime = getReadingTime;
/**
 * Average words per minute for technical content
 *
 * Set to 200 WPM to account for the slower, more careful reading
 * typically required for technical documentation and engineering articles.
 */
var WORDS_PER_MINUTE = 200;
/**
 * Calculates reading time in minutes from text content
 *
 * Removes code blocks before counting words, as code requires different
 * reading patterns. Counts only non-empty words and rounds up to ensure
 * the estimate is realistic. Enforces a minimum of 1 minute.
 *
 * @param content - The text content to analyze (markdown or plain text)
 * @returns Estimated reading time in minutes (minimum 1)
 *
 * @example
 * const minutes = calculateReadingTime("Your article content here...");
 * // returns: 5
 */
function calculateReadingTime(content) {
    // Remove code blocks (they take longer to read, but we count them separately)
    var textWithoutCode = content.replace(/```[\s\S]*?```/g, '');
    // Count words
    var words = textWithoutCode.trim().split(/\s+/).filter(function (word) { return word.length > 0; });
    var wordCount = words.length;
    // Calculate minutes, minimum 1 minute
    var minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
    return minutes;
}
/**
 * Formats reading time for display
 *
 * Converts a numeric minute value into a human-readable string
 * suitable for displaying in article headers or card metadata.
 *
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 *
 * @example
 * const formatted = formatReadingTime(5);
 * // returns: "5 min read"
 */
function formatReadingTime(minutes) {
    return "".concat(minutes, " min read");
}
/**
 * Calculates and formats reading time from content in one step
 *
 * Convenience function that combines calculateReadingTime and formatReadingTime.
 * Useful when you need the formatted output directly without intermediate values.
 *
 * @param content - The text content to analyze (markdown or plain text)
 * @returns Formatted reading time string (e.g., "5 min read")
 *
 * @example
 * const readingTime = getReadingTime(article.body);
 * // returns: "5 min read"
 */
function getReadingTime(content) {
    var minutes = calculateReadingTime(content);
    return formatReadingTime(minutes);
}
