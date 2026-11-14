// Regenerate the static social cards on macOS: swift scripts/generate-social-preview.swift
// Uses the same installed Geist font assets as the website. No external downloads.
import AppKit
import CoreText

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let fontURL = root.appendingPathComponent("node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2")
precondition(CTFontManagerRegisterFontsForURL(fontURL as CFURL, .process, nil), "Install dependencies first")
let output = root.appendingPathComponent("public/og")
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let width = 1200, height = 630
let teal = NSColor(srgbRed: 0.33, green: 0.84, blue: 0.76, alpha: 1)
let purple = NSColor(srgbRed: 0.71, green: 0.60, blue: 0.97, alpha: 1)
let muted = NSColor(srgbRed: 0.65, green: 0.66, blue: 0.72, alpha: 1)
for language in ["en", "es"] {
    let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: width * 4, bitsPerPixel: 32)!
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
    NSColor(srgbRed: 0.035, green: 0.035, blue: 0.055, alpha: 1).setFill()
    NSRect(x: 0, y: 0, width: width, height: height).fill()
    func text(_ string: String, x: CGFloat, top: CGFloat, size: CGFloat, color: NSColor) {
        let font = NSFont(name: "Geist", size: size)!
        let line = NSAttributedString(string: string, attributes: [.font: font, .foregroundColor: color])
        precondition(line.size().width <= 1056, "Text exceeds card safe area")
        line.draw(at: NSPoint(x: x, y: CGFloat(height) - top - line.size().height))
    }
    for x in stride(from: 760, through: 1130, by: 24) {
        for y in stride(from: 72, through: 560, by: 24) {
            NSColor(white: 1, alpha: 0.07).setFill()
            NSBezierPath(ovalIn: NSRect(x: x, y: y, width: 2, height: 2)).fill()
        }
    }
    text("eml.dev", x: 72, top: 60, size: 25, color: teal)
    text(language == "en" ? "PORTFOLIO" : "PORTAFOLIO", x: 926, top: 64, size: 17, color: muted)
    text("Enrique Macías López", x: 72, top: 184, size: 80, color: .white)
    let gradient = NSGradient(starting: teal, ending: purple)!
    gradient.draw(in: NSRect(x: 72, y: 318, width: 960, height: 3), angle: 0)
    text("Software Engineer", x: 72, top: 334, size: 44, color: teal)
    text(language == "en" ? "Full-Stack Development, AI Applications & Mobile" : "Desarrollo Full-Stack, Aplicaciones de IA y Móvil", x: 72, top: 407, size: 27, color: muted)
    text("enriquemacias.dev", x: 72, top: 547, size: 23, color: .white)
    text(language == "en" ? "Monterrey, Mexico" : "Monterrey, México", x: 888, top: 552, size: 18, color: muted)
    NSGraphicsContext.restoreGraphicsState()
    let data = bitmap.representation(using: .png, properties: [:])!
    try data.write(to: output.appendingPathComponent("portfolio-\(language).png"))
    print("Generated portfolio-\(language).png: \(width)x\(height)")
}
