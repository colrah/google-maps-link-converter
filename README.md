# Google Maps Link Converter

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

## 📝 Usage

1. **Paste URL**: Copy a Google Maps place URL from your browser
2. **Convert**: Click the "Convert URL" button
3. **Copy & Share**: Use the copy button or open directly

### Supported URL Formats
- Google Maps place URLs with place IDs
- URLs containing the pattern `!1s0x[hex]:0x[hex]`


**Made with ❤️ for easier map sharing**
