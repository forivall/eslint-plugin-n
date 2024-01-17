"use strict"

const path = require("path")
const isTypescript = require("./is-typescript")
const getTypescriptExtensionMap = require("./get-typescript-extension-map")

/**
 * @overload
 * @param {import('eslint').Rule.RuleContext} context
 * @param {string} filePath The filePath of the import
 * @param {string} fallbackExtension The non-typescript fallback
 * @param {false} [reverse] Execute a reverse path mapping
 * @return {string} The file extension to append to the import statement.
 */
/**
 * @overload
 * @param {import('eslint').Rule.RuleContext} context
 * @param {string} filePath The filePath of the import
 * @param {string} fallbackExtension The non-typescript fallback
 * @param {true} reverse Execute a reverse path mapping
 * @return {string[]} The file extension to append to the import statement.
 */
/**
 * Maps the typescript file extension that should be added in an import statement,
 * based on the given file extension of the referenced file OR fallsback to the original given extension.
 *
 * For example, in typescript, when referencing another typescript from a typescript file,
 * a .js extension should be used instead of the original .ts extension of the referenced file.
 *
 * @param {import('eslint').Rule.RuleContext} context
 * @param {string} filePath The filePath of the import
 * @param {string} fallbackExtension The non-typescript fallback
 * @param {boolean} reverse Execute a reverse path mapping
 * @return {string | string[]} The file extension to append to the import statement.
 */
function mapTypescriptExtension(
    context,
    filePath,
    fallbackExtension,
    reverse = false
) {
    const { forward, backward } = getTypescriptExtensionMap(context)
    const ext = path.extname(filePath)
    if (reverse) {
        if (isTypescript(context) && ext in backward) {
            return backward[ext]
        }
        return [fallbackExtension]
    } else {
        if (isTypescript(context) && ext in forward) {
            return forward[ext]
        }
    }

    return fallbackExtension
}

module.exports = mapTypescriptExtension
