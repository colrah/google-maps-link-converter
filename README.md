# Google Maps Link Converter

A beautiful, production-ready web tool that converts long, complex Google Maps URLs into clean, shareable links.

![Google Maps Link Converter](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Google+Maps+Link+Converter)

## ✨ Features

- **Clean Interface**: Beautiful, modern design with smooth animations
- **Instant Conversion**: Extract CID from complex Google Maps URLs
- **One-Click Copy**: Copy converted URLs to clipboard instantly
- **Direct Open**: Open converted URLs in new tabs
- **Mobile Responsive**: Works perfectly on all devices
- **Error Handling**: Clear feedback for invalid URLs

## 🚀 Live Demo

[Try it live here!](https://your-username.github.io/google-maps-link-converter)

## 📖 How It Works

The tool extracts the unique Content ID (CID) from Google Maps place URLs and creates clean, short links:

**Before:**
```
https://www.google.com/maps/place/A+New+Leaf+Norfolk/@52.6434402,1.3488311,17z/data=!3m1!4b1!4m6!3m5!1s0x47d9e301afa19001:0x8e6273dccb2b7b1c!8m2!3d52.6434402!4d1.3488311!16s%2Fg%2F11q3565ndr?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D
```

**After:**
```
https://maps.google.com/?cid=10259890293242034972
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google-maps-link-converter.git
   cd google-maps-link-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as source
4. The site will be available at `https://yourusername.github.io/google-maps-link-converter`

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on every push

### Vercel
1. Import your GitHub repository to Vercel
2. It will auto-detect the Vite configuration
3. Deploy with one click

## 🧰 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## 📝 Usage

1. **Paste URL**: Copy a Google Maps place URL from your browser
2. **Convert**: Click the "Convert URL" button
3. **Copy & Share**: Use the copy button or open directly

### Supported URL Formats
- Google Maps place URLs with place IDs
- URLs containing the pattern `!1s0x[hex]:0x[hex]`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for cleaner, shareable Google Maps links
- Icons by [Lucide](https://lucide.dev/)

---

**Made with ❤️ for easier map sharing**