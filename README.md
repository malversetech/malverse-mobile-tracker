# Malverse Mobile Tracker (MMT) - Progressive Web App

A Progressive Web App designed for BOT tracking with offline capabilities and a cyberpunk-inspired interface.

## 🚀 Features

- Progressive Web App (PWA) functionality
- Offline support with custom offline page
- Installable on desktop and mobile devices
- Cyberpunk-themed UI with green-on-black terminal aesthetic
- Custom loading animations and status indicators
- Cross-browser compatibility
- Responsive design

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (local or hosted) - PWAs don't work with file:// protocol
- Basic understanding of HTML, CSS, and JavaScript

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/malverse-mobile-tracker.git
```

2. Set up the project structure:
```
malverse-mobile-tracker/
├── index.html
├── offline.html
├── app.js
├── styles.css
├── service-worker.js
├── manifest.json
├── icon-192x192.png
└── icon-512x512.png
```

3. Serve the files using a web server (example using Python's built-in server):
```bash
python -m http.server 8000
```

4. Access the app through your web browser:
```
http://localhost:8000
```

## 💻 Usage

1. Visit the website on your device
2. Click the "Install App" button when prompted
3. The app will be installed on your device and can be accessed offline
4. Track BOTs through the interface even without internet connection

## 📱 PWA Installation

### On Mobile:
1. Open the website in your browser
2. Tap the "Add to Home Screen" button in your browser menu
3. Follow the installation prompts
4. The app will appear on your home screen

### On Desktop:
1. Visit the website
2. Look for the install icon in your browser's address bar
3. Click "Install"
4. The app will install and create a desktop shortcut

## 🔧 Technical Details

### Core Technologies:
- HTML5
- CSS3
- JavaScript (ES6+)
- Service Workers
- Web App Manifest

### Key Files:
- `index.html`: Main entry point
- `offline.html`: Offline fallback page
- `app.js`: Core application logic
- `styles.css`: Styling and animations
- `service-worker.js`: PWA offline functionality
- `manifest.json`: PWA configuration

## 🎨 Customization

### Theme Colors
The app uses a cyberpunk theme with:
- Background: Black (#000000)
- Text/Accents: Green (#00FF00)

To modify the theme:
1. Update colors in `styles.css`
2. Modify `theme_color` and `background_color` in `manifest.json`
3. Update meta theme-color in HTML files

### Icons
Replace the default icons with your own:
- `icon-192x192.png`: Small icon for most devices
- `icon-512x512.png`: Larger icon for high-res displays

## 🔍 Testing

Test the following functionality:
1. Initial load and installation
2. Offline capabilities
   - Turn off internet connection
   - Verify offline.html displays correctly
3. Cache updates
4. Installation process on different devices
5. Loading indicators and status messages

## 📝 Development Notes

### Service Worker
- Implements cache-first strategy
- Caches essential files on installation
- Provides offline fallback
- Handles cache updates

### Status Indicators
- Network status (online/offline)
- Installation progress
- Loading states
- Error messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Known Issues

1. Custom cursor might not work on all browsers
2. Installation prompt may vary across different browsers
3. PWA features require HTTPS in production

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Acknowledgments

- Cyberpunk design inspiration
- PWA community resources
- Modern web development best practices

## 🔮 Future Enhancements

- [ ] Add push notifications
- [ ] Implement data synchronization
- [ ] Add more tracking features
- [ ] Enhanced offline capabilities
- [ ] Improved user interface
- [ ] Better error handling
- [ ] Analytics integration
